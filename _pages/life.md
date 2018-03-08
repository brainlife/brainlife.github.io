---
title: "Linear Fascicle Evaluation (LiFE)"
subtitle: "Evaluation and statistical inference"
layout: app
starturl: "/legacy/life"
permalink: /home/life
giturl: "https://github.com/brain-life/app-life"
---

Automated access to [Compute clouds](https://jetstream-cloud.org) to use the Linear Fascicle Evaluation method [LiFE](http://francopestilli.github.io/life/). Standard tractography can use diffusion measurements from a living brain to generate a large collection of candidate white-matter fascicles; the connectome. Linear Fascicle Evaluation (`LiFE`) takes any connectome and uses a forward modelling approach to predict diffusion measurements. 

`LiFE` predicts the measured diffusion signal using the orientation of the fascicles present in a connectome. The difference between the measured and predicted diffusion signals is used to evaluate the prediction error of a connectome and quantify the evidence supporting properties of the connectome. 

The services generate the following metrics:

* *The strength of evidence* compares the mean prediction error between alternative hypotheses. 
* *The earth mover's distance* compares full distributions of prediction error. 

These metrics can be used for.

1. Comparing tractography algorithms.
2. Evaluating the quality of tractography solutions for individual brains or for a group of brains
3. Testing hypotheses about white-matter tracts and connections.

![screenshot](/images/screenshots/life.png)
