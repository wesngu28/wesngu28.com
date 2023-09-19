---
layout: '../../layouts/BlogPost.astro'
title: 'My Self-Hosting Setup'
description: 'What I am running on my servers and devices'
pubDate: '9 19 2023'
heroImage: '/blog/Server.jpg'
heroImageAlt: 'CERN server room (not mine)'
heroImageAttr: Torkild Retvedt https://www.flickr.com/photos/torkildr/3462607995
---

This article is essentially just a snapshot and small post about my homelab/self-hosting setup.

After finding myself in the position to inherit loads of old computers during my IT internship with International Wood Products in the summer of 2022, I tripped and fell deep into the world of self-hosting. What I particularly liked was being able to run popular services or alternatives to these popular services just on my local network, which could mean faster speeds, more features, or just plainly grant more granular control over the service, app, or program.

A few months later, I became more cognizant and aware of my data privacy, and how my actions can impact them. Combine these two, and it is easy to see how this can easily spiral out of control, with nothing in the way to stop it. 

Except money. And time.

## Hardware

In the future, I would ideally want a dedicated machine meant for server usage and a NAS for more robust file storage, but for my usage, my current equipment is sufficient.

### Servers

- Dell Precision Tower 7810
    - Intel Xeon CPU E5-1620
    - 64 GB DDR4
    - AMD FirePro W5100
    - 128 GB SSD for boot/OS
    - 2 2 TB HDDs

This is the main computer used for hosting most of the services and also as file storage. 4 TB may seem low but this is enough for my use case, as I am not an avid consumer of content so my storage needs are dramatically reduced. No RAID, uptime is not essential for this box. I have not set up a 3-2-1 backup solution yet but most data is not essential, but I do have Syncthing to multiple personal devices and regular backups to an external drive of critical content like photos and the docker configuration.

- VPS on Hetzner

This hosts my [Sideroca](https://sideroca.com) project, a query frontend for a card game. The VPS is running Portainer and Nginx, as well as Postgres, Redis, and a Next.js application.

### Networking

- Motorola MB8600
- Dell Optiplex 3050 (pfSense)
- Ubiquity U6-LR
- TP-Link EAP610
- Trendnet 16 Port Unmanaged Switch
- TP-Link TL-SG108

All services on the network are accessible through a Wireguard VPN configured on the pfSense router. Some reverse proxying and internal DNS resolution is handled via HAProxy. pfBlockerNG handles ad-blocking and domain filtering.

## Software

### Operating Systems

The Precision is running Debian, recently updated to Debian 12 Bookworm. Debian is stable and that's all I really care about for a server operating system. The server is administered with ssh.

On my personal devices, I am running Siduction ("stable" debian testing), and have also used OpenSUSE Tumbleweed, Fedora KDE spin, and Kubuntu regularly (I am a fan of KDE). I also use Windows very sparingly (for work devices and for some games that require it).

### Self-Hosted Services (Docker)

1. [Dashy](https://dashy.to/)
    - Currently used server dashboard. It works great and is very customizable.
1. [HomePage](https://github.com/benphelps/homepage)
    - A server dashboard I am testing, I like it due to the deep integrations.
1. [Portainer](https://www.portainer.io/)
    - A nice frontend to easily manage the docker containers instead of diving into ssh all the time.
2. [Syncthing](https://syncthing.net/)
    - My replacement to a cloud, I use this sync photos and notes.
3. [Unifi Controller](https://github.com/linuxserver/docker-unifi-controller)
    - Self-hosted frontend for the Ubiquity controller, only used for the access point.
3. [FileBrowser](https://filebrowser.org/)
3. [Glances](https://nicolargo.github.io/glances/)
    - Server hardware monitoring
3. [Nginx Proxy Manager](https://nginxproxymanager.com/)
    - Secondary reverse proxy that compliments the reverse proxy on the router. NPM itself is a frontend to NGINX.
3. [Diun](https://crazymax.dev/diun/)
    - Helps me keep docker containers up to date (only tracks the media suite)
3. [Uptime Kuma](https://uptime.kuma.pet/)
    - Monitors the uptime of services. This Uptime Kuma tracks every single service on my Hetzner VPS.
4. [Photoview](https://photoview.github.io/)
    - Photo management software.
4. [Jellyfin](https://jellyfin.org/)
    - Primary media server, used to handle movies, tv shows, and music. Literally the best software.
4. [Jellyseerr](https://github.com/Fallenbagel/jellyseerr)
    - Allows me to make requests to the relevant clients to acquire more media for Jellyfin.
5. [SABnzbd](https://sabnzbd.org/) and the Arrs
    - Usenet Download Client and the relevant download managers (Sonarr, Radarr, etc.)
6. [JDownloader2](https://github.com/jlesage/docker-jdownloader-2)
    - A dockerized JDownloader2, handles things like PDFs or other files hosted on various cloud storages.
8. [FreshRSS](https://www.freshrss.org/)
    - What I use to keep up-to-date on Reddit posts and largely replaces miscellaneous social media browsing for me. I use FullFeedRSS, also in docker, for full posts for things like Ars Technicia and Rotoworld.
8. [MonitoRSS](https://monitorss.xyz/)
    - For notifications that I would consider critical (fantasy football injury updates, some game news), I use MonitoRSS, which is a discord bot. It then dumps all the updates from the relevant RSS feeds into a personal discord server.
11. [Overleaf](https://github.com/overleaf/overleaf)
    - Self hosted Overleaf, mainly used for typesetting for my professional documents.
12. [Closure](https://github.com/wesngu28/closurets) (my discord bot)
20. [YoutubeDL Material](https://github.com/Tzahi12345/YoutubeDL-Material)
    - A frontend for youtube-dl.
21. [LibReddit](https://github.com/libreddit/libreddit)
    - Alternative reddit frontend for the desktop.

## Conclusion

That's pretty much it as far as my setup goes at the moment.

There are still some things I definitely want to improve on, like getting more dedicated equipment, and improving my current backup situation. However, I am quite satisfied with where things are at right now and hope that it can continue to serve me well. In the future, maybe I can write about some of the ways I've removed proprietary clouds, software, and services from my desktop, PCs, and phones.