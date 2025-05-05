---
layout: posts

title: Visualizing the Space of Seifert Fiberings
description: >-
    In this article, we discuss a visual approach to understanding the homology generators of the space of Seifert fiberings equivalent to the trivial fibering of <em>S<sup>1</sup>&times;S<sup>2</sup></em>
tags:
  - math
  - algebraic topology
  - differential topology
author: Amarisa Chalermratananon, Cathy Guo, Gabe Lewis, Shana Li, Tyler Wang, Yi Wang
date: 2025-05-1

footnotes: true
tex: true
theorem: true
---

## Introduction
One of the hallmarks of the 20<sup>th</sup> century was the development of topology.
Having roots in analysis, topology is the idea that we consider discussing ideas without explicitly discussing the notion of distance.
For this reason, some coined the term "rubber-sheet geometry" to describe topology, as spaces are considered equivalent in topology up to arbitrary distortion.
The classic example of this is the joke that a topologist can't tell the difference between a coffee mug and a donut, since one could, in some sense, distort a donut into a coffee mug.

Now topology can be used to describe a wide class of spaces, and distinguishing them in general can be a bit tricky.
For example, whilst intuitively, we know 2D space cannot be deformed into 3D space, actually proving this statement becomes surprisingly non-trivial.
Now this is an example of a problem that we can at least visualize.
As it turns out, start doing things like increasing dimension, or move to spaces which aren't embeddable into Euclidean space, our intuition starts to run out and we start to see the need for more formal constructions.

To tackle this problem, over the past century, mathematicians have developed various tools to transform difficult topological problems into relatively less difficult algebraic ones.
One of the earliest examples of this "algebrization" process is what's known as constructing the *fundamental group* for a space.
The fundamental group is this idea that one could take every loop within a topological space (up to continuous deformation) and consider this collection of loops as a *group* (Don't worry if you don't know what a group is yet. We will discuss more later in the article.).
It turns out, however, this process really only helps classify spaces which are in some sense "2-dimensional"; thus, to generalize this concept, we introduced the higher homotopy groups, which are constructed by considering all continuous maps of arbitrarily dimensioned spheres, $S^n$, into the space in question.
Since when doing group algebra we generally don't assume commutativity, the classification process of arbitrary groups is not much easier than the original topological problem it tried to simplify.

Herein comes homology to help save the day.
Using homology, we can translate topological spaces to arbitrary groups, we translate them into *abelian* groups, which have the advantage of being commutative.
It turns out being commutative makes all of the difference since with this additional piece of information, the classification problem becomes much simpler since a corollary of the structure theorem for finitely generated PID modules gives us a very nice way to classify these groups (again, don't worry if you don't know what this means).

But these tools still only provide an analytical understanding of these spaces.
Whilst it’s generally a bad idea to become obsessed with visual intuition for abstract geometric concepts, visual intuition for abstract geometry is not worthless, and having an intuition for complicated geometric concepts can help a lot with advancing our knowledge of these spaces.
As a bonus, visual representations of difficult geometric concepts are a great way to inspire a new generation of students to pursue mathematics and help teach what mathematics is all about.

