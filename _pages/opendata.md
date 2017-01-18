---
title: "OpenData"
subtitle: "Reference repository for connectome data and derivatives"
layout: app
permalink: /opendata
---

<br>

# What is OpenData

OpenData is a reference repository for precision connectome mapping, white matter tracts analysis and algorithmic development.

To date, methods for precision measurement of human brain networks have not been fully developed or agreed upon. This results in a lack of reliability estimates within individuals brains. We present a rich dataset composed of dMRI and derivatives generated with multiple tractography algorithms across ranges of parameters and multiple repeats of brains obtained from healthy, cognitively normal human individuals. 

The tractography results are evaluated using state-of-the-art methods and standard methods used to segment the major human white matter tracts. Additionally, a series of connection matrices will be generated using standard cortical segmentation methods.  The full dataset comprises a few initial data files (12 brains from three different data sets with different properties of signal-to-noise ratio and resolution) and a large set of Derivatives comprising 1,440 tractograms, associated major tracts segmentations and connectomes. 

These results comprising of just under 10 Terabytes of compressed data account for about 3 months of compute time on the most modern high-performance compute systems. The data is organized using the BIDS (Brain Imaging Data Structure) standard with Open Data Common Attribution License.

<br><br><br>

# Who should use it?

<br>

<div class="columns3">

    <center>
        <img src="images/male-brain.svg" style="width: 50%;">
        <h3>Neuroscientists</h3>
    </center>
    
Neuroscientists interested in developing algorithms for community detection and network science on brain network data, without having to process the raw diffusion data into connectivity matrices. Our data set provides a jump-start mechanism by making available unthresholded raw brain connection matrices built in multiple individuals using different tracking methods.

    <br>

    <center>
        <img src="images/binary-code-numbers-on-monitor-screen.svg" style="width: 50%;">
        <h3>Computer Scientists</h3>
    </center>

Computer scientists are interested in implementing algorithms to perform white matter fascicles registration or clustering (REF). Our data set provides multiple sets of human white matter tracts segmented in several subjects with repeated measures and estimates made using multiple tractography methods.

    <br>

    <center>
        <img src="images/group-of-people-in-a-formation.svg" style="width: 50%;">
        <h3>Students</h3>
    </center>

Investigators studying white matter, neuroanatomy, as well as software developers for continuous testing (Dipy, Travis) or MRI physicists could use the data Derivatives as reference given current state-of-the-art methods. Importantly, the Derivatives dataset will be of help for students and beginning neuroimaging trainees. 


</div><!--columns3-->

<br><br><br>

<div class="testimony">

    <h1>Testimonies</h1>

    <br>

    <blockquote>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    <br>
    <p class="ref">- Soichi Hayashi, A random dude from Indiana University, 2016</p>
    </blockquote>
    
    <br>

    <blockquote>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.<br><br>
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    <br>
    <p class="ref">- Zatoichi, A blind swordsman from Tokyo, 2016</p>
    </blockquote>

    <br>
</div>

<br><br>

# Methods

## Datasources

### Diffusion-weighted MRI datasets

Three diffusion-weighted Magnetic Resonance Imaging data (dMRI) where used to generate all the derivatives in the initial repository layout, from publicly available sources \cite{Pestilli:2014kk,Rokem:2015kb,VanEssen:2013ep,Vu:2015fm}. Dataset are also available online at {\small \url{http://purl.stanford.edu/rt034xr8593}}, {\small \url{http://purl.stanford.edu/ng782rw8378}} and  {\small \url{https://www.humanconnectome.org/data/}}. Raw dMRI data were reproduced in the O3D repository to allow generation of derivatives.

### Stanford datasets

<b>STN</b> (96 gradient directions, $1.5 mm$ isotropic resolution) We used data collected in four subjects (age 37-39) at the Stanford Center for Cognitive and Neurobiological Imaging with a 3T General Electric Discovery 750 (General Electric Healthcare), using a 32-channel head coil (Nova Medical).

### Human Connectome Project datasets

<b>HCP3T</b> (90 gradient directions, 1.25 mm isotropic resolution) We used data collected in four subjects at the University of Washington St. Louis as part of the Human Connectome Project, with the Siemens 3T "Connectome." Only measurements from the $2,000 s/mm^{2}$ shell were used to generate the derivatives. Processing methods are described in \cite{VanEssen:2013ep}.

<b>HCP7T</b> (60 gradient directions, $1.05 mm$ isotropic resolution) We used data collected in four subjects part of the Human Connectome 7-Tesla (7T) dataset were used.  Data were collected the University of Minnesota Siemens 7T scanner. Only measurements from the $2,000 s/mm^{2}$ shell were used to generate derivatives. Processing methods are described in  \cite{Vu:2015fm}.

## Dataformat

Data files are organized according to the specifications defined by the Brain Imaging Data Structure (BIDS) (Gorgolewski et al. 2016). BIDS proposes a new standard for organize and describe neuroimaging data that can be both human and machine readable. Currently the specifications of the format don’t cover entirely the definition for data derivatives. We refer to the latest draft of the standard that introduces the format for data derivatives. The documentation of BIDS is available at http://bids.neuroimaging.io. 

- BIDS (Gorgolewski et al. 2016)

## Voxel reconstruction model and tractography

White matter fascicles tracking was performed using MRtrix 0.2.12 \cite{Tournier:2012bg}.  White- and gray-matter tissues were segmented using the T1-weighted MRI images associated to each individual brain, and then resampled at the resolution of the dMRI data. Only voxels identified primarily as white-matter tissue were used to perform tracking. 

- Dipy (Garyfallidis et al. 2014)
- Mrtrix (Tournier et al. 2012)

## Tract evaluation

We used the Linear Fascicle Evaluation method to optimize each fascicle group generated with tractography. The LiFE method identifies fascicles that successfully contribute to predicting the measured dMRI signal. It has been shown that only a small percentage of the total number of fascicles generated through a single tractography method is supported by the properties of given data set (Pestilli et al., 2014; Takemura et al., 2016). Because of this we removed all fascicles making no significant contribution to explaining the diffusion measurements. The number of streamlines retained in these optimized fascicles groups ranged about 80,000 (STN96) to 160,000 (HCP90).  Only fascicles groups processed using LiFE were used for all subsequent analyses.

- Life (Pestilli et al. 2014)
- Commit (Daducci et al. 2015)
- SIFT (Smith et al. 2015)

## Tract segmentation

Whole brain fascicles groups comprising only the tracts successfully contributing to predicting the measured dMRI signal as evaluated using LiFE (see section XX; \cite{Pestilli:2014kk}) were segmented to generated twenty of the major human white matter fascicles \cite{Yeatman:2012ku} (Mori et al. 2005).

- AFQ (Yeatman et al. 2012)
- WMQL (Wassermann et al. 2016)
- registration-based (Mayer et al. 2011)
- Atlas-based (O'Donnell and Westin 2007; Guevara et al. 2012)

## Tractogram registration
- (Wang et al. 2011)
- (O’Donnell et al. 2012)
- (Garyfallidis et al. 2015)

## Tractogram clustering
- (Maddah et al. 2008)
- (Garyfallidis et al. 2012)
- (O'Donnell et al. 2013)

Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <b>laboris</b> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

<center>
    <img src="images/open-book.svg" style="width: 100px;">
</center>

Why book icon? No clue.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.



