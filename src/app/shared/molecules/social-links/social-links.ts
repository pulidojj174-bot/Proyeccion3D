import { Component } from '@angular/core';
import { SocialLink } from '../../../core/models/interfaces/SocialLink.interface';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss'
})
export class SocialLinks {
  socialLinks: SocialLink[] = [
    { name: 'facebook', url: 'https://www.facebook.com/share/1JwVbhNq6u/', icon: '#1877f2' },
    /* { name: 'twitter', url: 'https://twitter.com', icon: '#1da1f2' }, */
    { name: 'instagram', url: 'https://www.instagram.com/proyeccion_3d?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==', icon: '#f09433' },
    { name: 'linkedin', url: 'https://www.linkedin.com/company/proyecci%C3%B3n-3d/', icon: '#0077b5' },
    { name: 'youtube', url: 'https://www.youtube.com/channel/UChHopGXcKzT2QsZ4YvTJZ0g', icon: '#ff0000' },
        { name: 'tiktok', url: 'https://www.tiktok.com/@proyeccion3d?is_from_webapp=1&sender_device=pc', icon: '#ff0000' }
  ];
}

