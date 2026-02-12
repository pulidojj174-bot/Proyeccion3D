import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { computed, input } from '@angular/core';

export interface PageHeroButton {
  label: string;
  path?: string;
  action?: () => void;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: string;
}

export interface PageHeroConfig {
  layout: 'hero-with-image' | 'hero-with-background' | 'simple' | 'centered';
  backgroundColor?: string;
  backgroundImage?: string;
  hasOverlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  maxWidth?: string;
  textColor?: string;
  textAlign?: 'left' | 'center';
}

@Component({
  selector: 'app-hero-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-header.html',
  styleUrl: './hero-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroHeaderComponent {
  title = input.required<string>();
  highlightedWords = input<string[]>([]);
  subtitle = input<string>();
  description = input<string>();
  heroImage = input<string>();
  imageAlt = input<string>();
  heroVideo = input<string>();
  videoAutoplay = input<boolean>(true);
  videoMuted = input<boolean>(true);
  videoLoop = input<boolean>(true);
  buttons = input<PageHeroButton[]>([]);
  config = input<PageHeroConfig>({
    layout: 'simple',
    backgroundColor: '#0f172a',
    textColor: 'white',
    textAlign: 'left',
    maxWidth: '48rem'
  });

  titleParts = computed(() => {
    const title = this.title();
    const highlightedWords = this.highlightedWords();

    if (!highlightedWords || highlightedWords.length === 0) {
      return [{ text: title, isHighlighted: false }];
    }

    let result = [{ text: title, isHighlighted: false }];

    highlightedWords.forEach(word => {
      const newResult: any[] = [];
      result.forEach(part => {
        if (part.isHighlighted) {
          newResult.push(part);
        } else {
          const splitParts = part.text.split(word);
          for (let i = 0; i < splitParts.length; i++) {
            if (splitParts[i]) {
              newResult.push({ text: splitParts[i], isHighlighted: false });
            }
            if (i < splitParts.length - 1) {
              newResult.push({ text: word, isHighlighted: true });
            }
          }
        }
      });
      result = newResult;
    });

    return result;
  });

  containerClasses = computed(() => {
    const config = this.config();
    const classes = ['page-hero'];

    if (config.layout) {
      classes.push(`page-hero--${config.layout}`);
    }

    if (config.backgroundImage) {
      classes.push('page-hero--with-bg-image');
    }

    if (config.hasOverlay) {
      classes.push('page-hero--with-overlay');
    }

    if (config.textAlign) {
      classes.push(`page-hero--text-${config.textAlign}`);
    }

    return classes.join(' ');
  });

  containerStyles = computed(() => {
    const config = this.config();
    const styles: any = {};

    if (config.backgroundColor) {
      styles.backgroundColor = config.backgroundColor;
    }

    if (config.backgroundImage) {
      styles.backgroundImage = `url(${config.backgroundImage})`;
    }

    return styles;
  });

  overlayStyles = computed(() => {
    const config = this.config();
    const styles: any = {};

    if (config.overlayColor) {
      styles.backgroundColor = config.overlayColor;
    }

    if (config.overlayOpacity !== undefined) {
      styles.opacity = config.overlayOpacity;
    }

    return styles;
  });
}
