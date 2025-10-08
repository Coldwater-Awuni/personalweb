'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { GalleryItem } from '@/content/projects';

interface MediaGalleryProps {
  items: GalleryItem[];
  className?: string;
}

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Lightbox = ({ items, currentIndex, isOpen, onClose, onNext, onPrevious }: LightboxProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrevious();
        break;
      case 'ArrowRight':
        onNext();
        break;
      case ' ':
        e.preventDefault();
        if (currentItem?.type === 'video') {
          setIsPlaying(!isPlaying);
        }
        break;
    }
  }, [isOpen, currentItem, isPlaying, onClose, onNext, onPrevious]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Navigation Controls */}
        <motion.button
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-60 glass-card p-3 rounded-full hover:bg-white/20 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          disabled={items.length <= 1}
        >
          <ChevronLeft size={24} className="text-white" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-60 glass-card p-3 rounded-full hover:bg-white/20 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          disabled={items.length <= 1}
        >
          <ChevronRight size={24} className="text-white" />
        </motion.button>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute top-4 right-4 z-60 glass-card p-3 rounded-full hover:bg-white/20 transition-colors"
          onClick={onClose}
        >
          <X size={24} className="text-white" />
        </motion.button>

        {/* Media Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="relative max-w-7xl max-h-[90vh] w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {currentItem.type === 'image' ? (
            <img
              src={currentItem.url}
              alt={currentItem.caption}
              className="w-full h-full object-contain rounded-xl"
              draggable={false}
            />
          ) : (
            <div className="relative">
              <video
                src={currentItem.url}
                poster={currentItem.thumbnail}
                className="w-full h-full object-contain rounded-xl"
                controls={false}
                autoPlay={isPlaying}
                muted={isMuted}
                loop
              />
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="glass-card p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="glass-card p-2 rounded-full hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 glass-card p-4 rounded-b-xl"
          >
            <p className="text-white text-lg font-medium">{currentItem.caption}</p>
            <p className="text-white/60 text-sm">
              {currentIndex + 1} of {items.length}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const MediaGallery = ({ items, className = '' }: MediaGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextItem = () => {
    setSelectedIndex((prev) => (prev + 1) % items.length);
  };

  const previousItem = () => {
    setSelectedIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl glass-card"
            onClick={() => openLightbox(index)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <>
                  <img
                    src={item.thumbnail || item.url}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium text-sm line-clamp-2">{item.caption}</p>
              </div>
            </div>

            {/* Type Badge */}
            <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md">
              <span className="text-white text-xs font-medium uppercase">
                {item.type}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        items={items}
        currentIndex={selectedIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onNext={nextItem}
        onPrevious={previousItem}
      />
    </>
  );
};

export default MediaGallery;