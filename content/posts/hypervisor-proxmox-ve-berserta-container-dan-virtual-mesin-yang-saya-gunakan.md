---
title: Hypervisor Proxmox VE berserta Container dan Virtual Mesin yang saya gunakan
date: 2023-07-24T17:00:00.000Z
image: /images/post/banner/10.png
categories:
  - Hypervisor
  - Proxmox
featured: true
---

Haloo semuanya, saya mau berbagi mengenai "Home Server" yang saya bikin beberapa hari kebelakang. Mungkin bisa menjadi refrensi dan sebagai bertukar informasi.
Disini saya menggunakan Dell Optiplex 3060 Micro Desktop dengan spek seperti
Intel Core i7 8700
Ram DDR4 16GB
SSD 256 GB + HDD 500 GB
Spek lengkap bisa dilihat di web proxmox nya

Kemudian saya menggunakan beberapa container yaitu :

1\. Cloudflared untuk tunneling
2\. Pihole untuk bikin Lokal DNS dan blokir

![](/images/post/1a4daf663ece3542a54e85f25cccb39031e4eab8-1366x768.webp)

3\. Heimdal untuk dasbor app![](/images/post/4ac314926545775941321d43795302b8990d037d-1366x768.webp)

4\. Tailscale untuk VPN

Selanjutnya terdapat beberapa virtual mesin yaitu :
1\. Windows 11 yang bisa digunakan remote dengan RDP![](/images/post/d570fba09f257ce81bfedddb11bc18a5979a1816-1366x768.webp)

2\. Ubuntu Server yang diinstalkan Cyberpanel. Cyberpanel lumayan lengkap menurut saya fiturnya dan tentu saja mudah digunakan. Fitur multi pengguna sih saya butuhkan.

![](/images/post/bdb6b31ace6cba2841e0778656c29613c4ce83d6-1366x768.webp)

3\. Ubuntu Server yang diinstalkan Jenkins dan Cockpit untuk monitoring servernya![](/images/post/5c9db73fa7b408fec60877afff23a2e3b78c8d32-1366x768.webp)

![](/images/post/cc6d82bac421222e49c9a5b5535c9a6232668cdb-1366x768.webp)

4\. RHEL Server With GUI yang pakai gnome dan monitoringnya pakai Cockpit. Diremote juga via VNC.![](/images/post/99cefb8ebfcd489407c521232f0b6a9a247c2588-1366x768.webp)![](/images/post/6d7a34af87f26a1cb2d7f9fc2b231195bdf7f401-1366x768.webp)

5\. Router OS CHR untuk belajar mikrotik sih.![](/images/post/22467c163e7702cda6832c23bd931242b133a31a-1366x768.webp)

6\. Synology NAS untuk backup foto dan video dilatptop. HDD yang 500GB itu dipakai pada NAS ini. Saya pasang portainer juga untuk manajemen dockernya.![](/images/post/a4fa4c9d68edc101b01d46eff3295ca1189d6375-1366x768.webp)

![](/images/post/62b20b80dffad83895ba9c9f84887192824087ed-1366x768.webp)
