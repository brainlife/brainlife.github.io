---
title: "Preprocessing"
subtitle: "Initialize DWI data using vistasoft/dtiInit"
layout: app
starturl: "https://brain-life.org/preprocessing"
permalink: /preprocessing
giturl: "https://github.com/brain-life/app-dtiinit"
---

One of the first steps for processing your diffusion data often involves extracting some 
common parameters such as ...

<div style="float: right;">
    <!--<img src="/images/preprocessing/t1.jpg" width="80px;">-->
    <img src="/images/preprocessing/fa.jpg" width="80px;">
    <img src="/images/preprocessing/md.jpg" width="80px;">
    <img src="/images/preprocessing/vector.jpg" width="80px">
</div>

* Fractional Anisotropy (FA)
* Mean Diffusivity (MD)
* Principal Diffusion Direction
* Brain Mask
* White Matter Mask
* etc..
<br clear="both">

vistasoft/dtiInit is a common tool that allows you to extract this information.
One important output from dtiInit is a file called `dt6.mat`. 
This file contains information used by various other DWI applications; mrDiffusion, AFQ, mrTrix, LiFE, etc..

dtInit also performs eddy current correction. [Eddy current](http://mri-q.com/eddy-current-problems.html) is 
an image artifact that is induced when MRI gradients are pulsed on and off rapidly (i.e., short TE), which is often the case for DWI. dtiInit can try to correct it.

Please see [here](https://github.com/vistalab/vistasoft/wiki/DWI-Files) for other data products produced by dtiInit.

<br>
<h3>Sample Output</h3>
<center>
<img src="/images/screenshots/dtiinit.png" class="screenshot">
</center>
<br>
