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
Since when doing group algebra we generally don't assume commutativity when doing group algebra, the classification process of arbitrary groups is not much easier than the original topological problem it tried to simplify.

Herein comes homology to help save the day.
Using homology, we can translate topological spaces to arbitrary groups, we translate them into *abelian* groups, which have the advantage of being commutative.
It turns out being commutative makes all of the difference since with this additional piece of information, the classification problem becomes much simpler since a corollary of the structure theorem for finitely generated PID modules gives us a very nice way to classify these groups (again, don't worry if you don't know what this means).

But these tools offer valuable analytical insight into such spaces, they often fall short in cultivating a deeper, intuitive grasp.
Although relying too heavily on visual intuition for abstract geometric concepts can be misleading, dismissing it entirely would be a mistake.
Visual intuition can be immensely helpful in developing an understanding of complex geometric ideas and pushing the boundaries of our knowledge.
Moreover, visual representations also serve as powerful tools for inspiring the next generation of mathematicians and conveying the true spirit of mathematical thinking.

## Basic Constructions
While this article is mostly targeted towards people with little math experience, there are still constructions important to our discussion that I'd like to go over.
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

If we sit and ponder this for a minute, we should be able to see that we can identify each point as an ordered pair in the form $(t,s)$, where $t$ and $s$ range from $0$ to $2\pi$ representing points on the longitudinal and meridian circles, respectively.

Taking some inspiration from this construction of the torus, let's construct $S^2\times S^1$ in the following way:
Start with a solid ball with a cavity at the center.
Then we can see that each point can be completely identified by $(t,s)$, where $t$ is a point on the inner sphere and $s$ as the distance from the origin.
Effectively, what we have here is $S^2 \times I,$ where $I$ is the interval between the two spheres.
Then, if we identify points that lie on the same ray starting at the origin, we get $S^2 \times S^1$.

It may seem immediately obvious that this manifold is not embeddable into 3-space, thus making it impossible to visualize (at least intuitively).
Thus to make sense of this, we have to imagine each boundary sphere is a portal sending a point to the inner sphere from the outer sphere or vise versa.

Thus, a loop in $S^2 \times S^1$ may look like the following:

[comment]: Add loop of S^2 \times S^1

{:.no-indent}
Notice that at the points where this loop crosses the boundary lies on the same ray.
If this didn't happen, the immediate consequence would be that this loop is not continuous, hence not of any real interest.

We will now move on to discussing $\rp^3$.
Similar to before, $\rp^3$ isn’t embeddable into 3-space, hence we need to come up with an alternative way to think about it.
This time, we will start with $D^3$ and instead we will instead identify antipodal points.
Similar to before, to conceptualize, we imagine the boundary as a portal sending points on the boundary to a point on the boundary on the opposite side of the sphere.
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
Then, since every rotation in 3-space has an axis of rotation*The reason for this just boils down to basic linear algebra.
For any $3\times 3$ matrix, to find the eigenvalues, we have to solve a degree-three polynomial.
Since such a polynomial must have one real solution, any $3\times 3$ matrix must have one real eigenvalue.
Thus, it remains to prove that if a matrix has determinant one, this eigenvalue must be one.*{:.foot-tag},
we take this axis to be collinear with the ray that connects our point to the origin.
Then, for the amount we rotate by, we take this to be the distance from the origin.
Thus, the center of $\rp^3$ represents the identity matrix in $SO(3)$ and a point in this image

[comment]: add image of point on z-axis half way to boundary

{:.no-indent}
might be a $180^\circ$ rotation around the $z$-axis, if we assume the point to be exactly in the middle.

## Seifert Fiberings
While a Seifert fibering is a general construction that can exist on a wide class of manifolds, for our discussion, we will restrict our discussion to only consist of a specific class of Seifert fiberings on $S^2 \times S^1$.

Let's first talk about a fiber bundle.
Loosely speaking, a fiber bundle is a way to break down a *total space* into individual *fibers* attached to some *base space*.
For example, we can consider an annulus as a collection of fibers stemming from the inner circle stretching outwards, like in the following image (of course, we have only selected a finite number of fibers to display).

[comment]: add trivial fibering of annulus.

{:.no-indent}
Thus, we can consider the annulus as a fibering of $S^1$.
Another way to think about a fiber bundle is that for every point in the base space, locally, this point in the total space looks like the Cartesian product of the fiber and a small neighborhood around the point.

We can give a formal definition of what we explained here, and it goes as follows:
> A *fiber bundle* over some base space $B$ is a map $p:E \to B$ such that for every $x\in B$, the fiber $p^{-1}(x)$ is homeomorphic to some standard fiber $F$.
> Additionally, we denote $E$ as the total space. *For those of you who have studied algebraic topology, this definition may resemble the definition for a covering space. It turns out these things are somewhat related in the sense they both satisfy a homotopy lifting property.*{:.foot-tag}
{:.def #fiber-bund}

It should be noted here that fiber bundles are not generally unique, and any triple consisting of a base space, a total space, and a standard fiber can give rise to an infinite set of fiberings, which is what our proceeding sections will address.

Now, for our purposes, we will consider a fiber structure on $S^2\times S^1$, where each individual fiber is homeomorphic to a $S^1$ (i.e, non-self-intersecting loops).
As such, an example of such a fibering would be what’s known as the trivial Seifert fibering of $S^2 \times S^1$ and is displayed below.

[comment]: add trivial Seifert fibering.

We will use the symbol $T$ to denote this specific fibering.
In this article, we will study all such fiberings equivalent to this trivial fibering, and we consider two fiberings to be equivalent iff there exists some diffeomorphism from $S^2 \times S^1$ to itself between them.
We can collect all of these fiberings and put them into a set called $\sym{SF}(S^2\times S^1, T)$ and put a topology on it.
We won't go too much into detail about how this is done (if you're interested, I discuss this with more detail in the next section), but loosely speaking, we can quantify closeness between two fiberings by observing how big of a transformation we need to perform to get from one to another.

As shown [WY24], we have the following theorem
> The space $SF(S^2\times S^1,T)$ is homotopy equivalent to $\Omega SO(3)$, which is homeomorphic to $\Omega \rp^3$.
> Since $\Omega \rp^3$ has two path components, each homeomorphic to $\Omega S^3$.
> Thus, we have for each path component*It suffices to consider the homology in each path component separately since the disconnected path components don't really interact with each other.
> If we insist, we take the homology of the entire space by simply taking the direct sum of the homology groups in each dimension.*{:.foot-tag}
> $$H_n(\Omega S^3) =
> \begin{cases}
>   \integ &\text{if } n \text{ is even};\\
>   0 &\text{if } n \text{ is odd}
> \end{cases}$$
{:.thm #sf-homology}

We won't go into the details of proving this theorem, but we will tackle one small detail: *why do we know $\Omega\rp^3$ has two path components*.

Recall, a space is path connected if between every two points in the space there exists some path.
In the context of loop spaces, paths are essentially *homotopies* between paths (i.e. functions that deform on loop to another).
In $\rp^3$, there are always two homotopy classes of loops.

Let's try to show this in a visual way.*Of course we could also consider the fundamental group $\pi_1(\rp^3)$ which in this case is $\integ_2$.*{:.foot-tag}
Below, I have included some animation of loops in $\rp^3$ deforming.
What I want you to pay attention to is the number of times a loop intersects the boundary.

In the animation below,

{:.no-indent}
we see a loop expand from the constant loop centered at the origin to larger and larger loops.
If we pay attention to the number of intersections with boundary (assuming this loop is not tangent to the boundary anywhere), this number is always *divisible by 4*.
It turns out the divisibility of the number of intersections forms a sort of *homotopy invariant*:
No matter how you deform the constant loop, this number will always be divisible by 4.
We will denote these as the *trivial loops* in $\rp^3$.

Then examine this next animation

{:.no-indent}
We find for this loop, the intersection number is *not* divisible by 4.
Therefore, by the previous assertion, we conclude these loops are *not* homotopic to a constant loop, and hence form their own distinct class of loops.
We will denote these as the *non-trivial loops* in $\rp^3$.

It turns out, these are the only two classes of loops in $\rp^3$.
Since loops two loops in different classes aren't homotopic, we conclude they must belong to different path components of $\Omega \rp^3$.
We will denote each path component as $\Omega^T \rp^3$ and $\Omega^N \rp^3$, which are the path components containing and not containing the constant loop.

As mentioned in [theorem](#sf-homology){:.ref}, $SF(S^2\times S^1)$ is homotopy equivalent to $\Omega \rp^3$, hence $SF(S^2\times S^1)$ contains two path components.
We will denote $SF^T$ and $SF^N$ as path components of $SF(S^2\times S^1)$ containing and not containing the trivial fibering.
In particular each path component is homotopy equivalent to a distinct path component in $\rp^3$.
is homotopy equivalent to a path component in $\Omega \rp^3$, and since each path component in $\Omega \rp^3$ is homotopy equivalent to $\Omega S^3$, we arrive at the following relation:
$$SF^T \simeq_H \Omega S^3, \jand SF^N \simeq_H \Omega S^3.$$

The immediate result of this observation if that $H_n(SF^N)$ and $H_n(SF^T)$ are the infinite cyclic group for when $n$ is even, hence they generated by one element.
In the remainder of this article we will focus on when $n=2$ and try to interpret these results from a more visual approach.
For a more analytical analysis, I will refer you to [WY24, Section IV].

## The Animations
Now, we have finally reached the section where we can talk about the animations.

To actually realize loops in $\rp^3$ in $S^2\times S^1$, we need 


## Formal Discussion
Now this is the inevitable part of the article were we have a formal discussion about the math.
If you are someone who doesn't have much math experience (or just someone that gets bored in math class), this section might feel slightly out of reach, but I chose to include it for the people who might be interested in the more formal mathematics under the curtain.

To formalize $\sym{SF}(S^2 \times S^1,T)$, let's denote the set of all diffeomorphism of $S^2 \times S^1$ to itself by $\sym{Diff}(S^2 \times S^1)$.
Since the fiberings we are interested in all differ from $T$ by some diffeomorphism, $\sym{Diff}(S^2 \times S^1) \cdot T$, the set of all fiberings that are images under some diffeomorphism, contains all such fiberings.

To extend this idea, consider the (set-theoretic) function
$$F: \sym{Diff}(S^2 \times S^1) \to \sym{Diff}(S^2 \times S^1)\cdot T, \quad \phi \mapsto \phi(T).$$
This function is clearly surjective but not necessary injective.
Using orbit-stabilizer theorem from group theory, we have
$$\tilde F:\sym{Diff}(S^2 \times S^1)/\sym{Stab}(T) \to \sym{Diff}(S^2 \times S^1)\cdot T$$
is a bijection.
In this case, $\sym{Stab}(T)$ are all of the diffeomorphisms that preserve the trivial fibering (for example a rotation would be such an automorphism).
We refer any diffeomorphism that *preserves* fibers as *fiber preserving diffeomorphisms* and denote them by $\sym{Aut}(T)$.
Thus, we can identify each fibering in $\sym{Diff}(S^2\times S^1) \cdot T$ by an coset in $\sym{Diff}(S^2 \times S^1)/\sym{Aut}(T)$ uniquely.
This is what we will take as our definition of
$$\sym{SF}(S^2 \times S^1, T):=\sym{Diff}(S^2 \times S^1)/\sym{Aut}(T).$$

Now, the advantage having this group definition of $\sym{SF}(S^2\times S^1)$, since $\sym{Diff}(S^2\times S^1)$ is just some space of functions, we can choose from a number of topologies to put on this set depending on what properties we'd like to have.
For our purposes, we will chose the *compact open topology* thus let $\sym{SF}(S^2\times S^1,T)$ be the coset space of $\sym{Diff}(S^2\times S^1)$.


## References
<p style="text-indent: -50px; padding-left: 50px">
[WY24] Yi Wang, Jingye Yang. <em>On the homotopy type of the space of fiberings of $S^2\times S^1$ by simple closed curves</em>. arXiv preprint, arXiv:2404.08545, (2024).
</p>
