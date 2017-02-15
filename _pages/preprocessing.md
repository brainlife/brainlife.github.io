---
title: "Preprocessing"
subtitle: "Initialize DWI data using vistasoft/dtiInit"
layout: app
starturl: "https://brain-life.org/preprocessing"
permalink: /preprocessing
---

One of the first step for processing your diffusion data often involves with preprocessing your
data to extract some common parameters such as ..

* Fractional Anisotrophy (FA)
* Mean Diffusivity (MD)
* Principla diffusion direction
* Brain Mask
* White Matter Mask
* etc..

<br>
<center>
<img src="/images/preprocessing/fa.jpg">
<img src="/images/preprocessing/md.jpg">
<img src="/images/preprocessing/t1.jpg">
<img src="/images/preprocessing/vector.jpg">
</center>
<br>

One important output from dtiInit is a file called `dt6.mat`. This file contains information used by various other DWI applications; mrDiffusion, FQA, mrTrix, Life, etc..

dtInit also performs eddy current correction. Strong eddy current is induced when MRI gradients are pulsed on and off rapidly (short TE) which is oftenly the case for diffusion-weighted imaging. Eddy current creates unwanted image artifacts such as shearing, shading, scaling, blurring, and spatial misregistration. dtiInit can try to correct it.

Please see [here](https://github.com/vistalab/vistasoft/wiki/DWI-Files) for other data products produced by dtiInit.

