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
date: 2025-05-6

footnotes: true
tex: true
theorem: true
---

## Introduction
One of the hallmarks of the 20<sup>th</sup> century was the development of topology.
Having roots in analysis, topology is the study of geometry without the notion of distance.
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

But these tools offer valuable analytical insight into such spaces, they often fall short in cultivating a deeper intuitive grasp.
Although relying too heavily on visual intuition for abstract geometric concepts can be misleading, dismissing it entirely would be a mistake.
Visual intuition can be immensely helpful in developing an understanding of complex geometric ideas and pushing the boundaries of our knowledge.
Moreover, visual representations also serve as powerful tools for inspiring the next generation of mathematicians and conveying the true spirit of mathematical thinking.

## Basic Constructions
While this article is mostly targeted towards people with little math experience, their are still constructions important to our discussion that I'd like to go over.
For readers who are already familiar with algebraic topology, this section can be skipped without any loss of continuity.

[comment]: Topology
Informally, topology is the study of the properties of geometric objects that remain unchanged under some sort of smooth deformations. For instance, a circle can easily be stretched and compressed to form an oval, or a square, or any similar closed loop. In all of these cases, the loop will divide the plane into the interior of the loop, the exterior, and the loop itself. Similarly, when studying shapes in higher dimensions and with higher complexity, it can be helpful to examine simpler objects that are still *topologically* equivalent, i.e. can be smoothly deformed into one another. Another example would be the coffee cup and donut as before, but we can also distort them to form a straw.


[comment]: Groups
Groups are the simplest sets that you can still perform algebra on. they represent simple symmetries, like the symmetries of an equilateral triangle, or ways of ordering a deck of cards. Groups have a set of elements and a binary operation, or in other words an operation that takes 2 elements of the set and returns 1, and must obey a few select rules. Let *G* and * be the set and operation respectively. For any elements *a*, *b*, *c* of our set *S*, we have that (*a* * *b*) * *c* = *a* * (*b* * *c*) (rule of associativity). Further, There must exist some element *e*, called the identity element, such that *e* * *a* = *a* * *e* = *a*.For each element *a*, there is also some element *a*<sup>-1</sup>, called *a* inverse, such that *a* * *a*<sup>-1</sup> = *a*<sup>-1</sup> * *a* = *e*. Given a set and operation obeying these rules, they are a group. Finally, we call a set *abelian* if our operation is commutative, meaning that *a* * *b* = *b* * *a*. 

A good example of a group is the set of integers under the addition operation. Trivially we have the associativity property, and 0 is our identity element since adding it to any integer keeps it unchanged. Finally, for any integer *x*, we know that *-x* is also an integer, and *x* + *-x* = 0. Therefore we see that the integers under addition are a group. Even further, for any integers *a* and *b*, we see that *a* + *b* = *b* + *a*, and so the integers under addition are an *abelian* group. A Nonexample would be the integers under multiplication. Although we still have associativty property and 1 as the identity element, we don't have inverses for all of the elements. For example, what would be the inverse of 2? The obvious answer would be 1/2, but 1/2 is not an integer, so it does not form a group since it does not fulfill all properties. 

One final example of a group, this one with a finite set of elements, is *S<sub>n</sub>*. *S<sub>n</sub>* is the group of different shufflings (permutations) on *n* elements. As a concrete example, let *n* = 3. Then *S<sub>3</sub>* is the set of shufflings on 3 elements. We can represent them as tuples. Our set is {1, 2, 3} (in that order), so our elements of *S<sub>3</sub>* will be shufflings on that set. (1 2 3) would be the shuffling where everything remains fixed in place. In other words, this is our identity element. We also have the element (3 1 2), the element that shifts the elements forward one space, and brings 3 back around to the front. Further, our binary operation on our shufflings is composition. Meaning that *a* * *b* = *c* means that *c* is the shuffling resulted from performing *a*, and then *b* consecutively. (2 3 1) is also an element of *S<sub>3</sub>*, and we see that (3 1 2) * (2 3 1) = (1 2 3), so (3 1 2) and (2 3 1) are inverse elements. We can find an inverse for any elemnt of *S<sub>3</sub>* by simply doing the opposite for each element. For instance if the original shuffling sends 1 to the place that 3 was, the inverse shuffle will send 3 to th eplace that 1 was in. That way when we compose our shufflings, everything will be sent back to its original place. Finally, take the elements (2 1 3) and (2 3 1). (2 1 3) * (3 1 2) = (3 2 1), but (3 1 2) * (2 1 3) = (1 3 2). In other words, *S<sub>3</sub>* is not an abelian group, since we don't always have that *a* * *b* = *b* * *a*.

The last thing we need to know about groups is group action. Given a group, we can sometimes consider the elements of the group as functions in some way on another set *S* to itself. The most obvious example is *S<sub>n</sub>* from above. The set itself is defined as shufflings on *n* elements, so the group has the obvious function of performing that shuffle on the set of *n* elements.

[comment]: Homology


[comment]: Manifolds


[comment]: Construction of necessary manifolds

Like Euclidean space, we can also take the Cartesian product of spheres.
For instance, the torus can be represented by $S^1 \times S^1$ as seen in the image below.

[comment]: Add image of torus here

If sit and ponder this for a minute, we should be able to see that we can identify each point as an ordered pair in the form $(t,s)$, where $t$ and $s$ range from $0$ to $2\pi$ representing points on the longitudinal and meridian circles respectively.

Taking some inspiration from this construction of the torus, let's construct $S^2\times S^1$ in the following way:
Start with a solid ball with a cavity at the center.
Then we can see that each point can be completely identified by $(t,s)$, where $t$ is a point on the inner sphere and $s$ is the distance from the origin.
Effectively, what we have here is $S^2 \times I$, where $I$ is the interval between the two spheres.
Then if we identify points that lie on the same ray starting at the origin, we get $S^2 \times S^1$.

It may seem immediately obvious that this manifold is not embeddable into 3-space, thus making it impossible to visualize (at least intuitively).
Thus to make sense of this, we have to imagine each boundary sphere is a portal sending a point to the inner sphere from the outer sphere or vise versa.

Thus a loop in $S^2 \times S^1$ may look the following:

[comment]: Add loop of S^2 \times S^1

{:.no-indent}
Notice at the points which this loop crosses the boundary lie on the same ray.
If this didn't happen, the immediate consequence would be that this loop is not continuous, hence not of any real interest.

We will now move onto discussing $\rp^3$.
Similar to before, $\rp^3$ is not embeddable into 3-space, hence we need to come up with an alternative way to think about it.
This time, we will start with $D^3$ and instead we will instead identify antipodal points.
Like before to conceptualize, we imagine the boundary as a portal sending points on the boundary to a point on the boundary on the opposite side of the sphere.
A loop in $\rp^3$ could be represented in the following image:

[comment]: Add loop in rp^3

For those familiar with the quotient topology, we can give the following definition:

> Let $f:\partial D^3 \to \partial D^3$ be the antipodal map (i.e. $f(x)=-x$).
> Then
> $$\rp^3:= D/\sim,$$
> where $x\sim y$ iff $y$ is the image of $x$ under $f$.
{:.def #rp3}

{:.no-indent}
One could easily check that $\sim$ is an equivalent relation and [definition](#rp3){:.ref} agrees with every other definition of $\rp^3$.

The important fact about $\rp^3$ is that it is diffeomorphic to $SO(3)$.
To show this informally, let's consider a point in $\rp^3$.
Then since every rotation in 3-space has an axis of rotation*The reason for this just boils down to basic linear algebra.
For any $3\times 3$ matrix, to find the eigenvalues we have to solve a degree three polynomial.
Since such a polynomial must have one real solution, any $3\times 3$ matrix must have one real eigenvalue.
Thus it remains to prove that if a matrix has determinant one, this eigenvalue must be one.*{:.foot-tag},
we take this axis to be collinear to the ray that connects our point to the origin.
Then for the amount we rotate by, we take this to be the distance from the origin.
Thus the center of $\rp^3$ represents the identity matrix in $SO(3)$ and a point in this image

[comment]: add image of point on z-axis half way to boundary

{.no-indent}
might be a $180^\circ$ rotation around the $z$-axis, if we assume the point to be exactly in the middle.

## Seifert Fiberings
While a Seifert fibering is a general construction which can exist on a wide class of manifolds, for our discussion, we will restrict our discussion to only consist of a specific class of Seifert fiberings on $S^2 \times S^1$.

[comment]: add trivial fibering of annuls.

Let's first talk about a fiber bundle.
Loosely speaking, a fiber bundle is a way to break down a manifold into individual fibers.
For example we can consider the annuls as a collection of fibers stemming from the inner circle stretching outwards like in the following image (of course we have only selected a finite number of fibers to display).
Thus we can consider the annuls as a fibering of $S^1$.

Now for our purposes, we will consider a fiber structure on $S^2\times S^1$, where each individual fiber is homeomorphic to a $S^1$ (i.e non-self-intersecting loops).
As such, an example of such a fibering would be whats known as the trivial Seifert fibering of $S^2 \times S^1$ and is displayed below.

[comment]: add trivial Seifert fibering.

In this article we will study all such fibering equivalent to this trivial fibering and we consider two fiberings to be equivalent iff there exists a diffeomorphism between them.
To formalize this notion, we will consider






## Formal Discussion

## The Animations

## References
<p style="text-indent: -50px; padding-left: 50px">
[WY24] Yi Wang, Jingye Yang. <em>On the homotopy type of the space of fiberings of <em>S<sup>1</sup> &times; S<sup>1</sup></em> by simple closed curves</em>. arXiv preprint, arXiv:2404.08545, (2024).
</p>

