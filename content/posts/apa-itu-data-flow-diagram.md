---
title: Apa itu Data Flow Diagram
date: 2024-01-01T17:00:00.000Z
image: /images/post/banner/15.png
categories:
  - DFD
  - Analisis
---

### Pengertian

Data Flow Diagram (DFD) adalah metode analisis dan desain terstruktur. Ini adalah alat visual untuk menggambarkan model logika dan mengekspresikan transformasi data dalam suatu sistem. DFD mencakup mekanisme untuk memodelkan aliran data. Ini mendukung dekomposisi untuk menggambarkan detail aliran data dan fungsinya. DFD tidak dapat menyajikan informasi urutan operasi. Oleh karena itu, ini bukan metode pemodelan proses atau prosedur.

### Ciri-ciri

DFD mencakup ciri-ciri sebagai berikut:

1. Mendukung tahap analisis dan kebutuhan perancangan sistem;
2. Teknik pembuatan diagram dengan anotasi;
3. Mendeskripsikan jaringan aktivitas/proses sistem sasaran;
4. Memungkinkan perilaku paralel dan asinkron;
5. Penyempurnaan bertahap melalui dekomposisi proses secara hierarkis.

### Contoh 

![](/images/post/dfd/Gambar2.png)

### Notasi

Notasi berikut berdasarkan Gane & Sarson Notation System

#### Process / Proses

Proses adalah transformasi data. Ia menerima aliran data sebagai masukan dan menghasilkan aliran data sebagai keluaran.

![](/images/post/dfd/Gambar3.png)

#### Data Flow / Aliran Data

Aliran Data adalah elemen penghubung yang kedua ujungnya terhubung ke aktivitas/proses,  Penyimpanan Data, entitas eksternal, dan sebagainya.

![](/images/post/dfd/Gambar4.png)

#### Data Store / Penyimpanan Data

Penyimpanan data adalah tempat penyimpanan data permanen dan menyajikan pengganti basis data/fail.

![](/images/post/dfd/Gambar5.png)

#### External Entity / Entitas Eksternal

Entitas Eksternal merupakan asal/tujuan aliran data eksternal dan menyediakan koneksi ke konteks sistem.

![](/images/post/dfd/Gambar6.png)

### Aturan DFD

1. Suatu entitas tidak dapat memberikan data ke entitas lain tanpa terjadi pemrosesan.
2. Data tidak dapat berpindah secara langsung dari suatu entitas ke cerita data tanpa diproses.
3. Data tidak dapat berpindah langsung dari penyimpanan data tanpa diproses.
4. Data tidak dapat berpindah langsung dari satu penyimpanan data ke penyimpanan data lainnya tanpa diproses

### Refrensi

* Li, Q., & Chen, Y. L. (2009). Modeling and Analysis of Enterprise and Information Systems: from requirements to realization. Higher Education Press.
* What is Data Flow Diagram? (n.d.). Retrieved January 1, 2024, from [https://www.visual-paradigm.com/guide/data-flow-diagram/what-is-data-flow-diagram/](https://www.visual-paradigm.com/guide/data-flow-diagram/what-is-data-flow-diagram/)
