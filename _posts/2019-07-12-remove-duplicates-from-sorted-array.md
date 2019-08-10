---
layout: page
title: "26. Remove Duplicates from Sorted Array"
subtitle: 
description: ""
author: "aditya"
comments: true
image: assets/images/code_pic.png
meta_image: assets/images/code_pic_meta.png
categories: [code,leetcode]
tags: [python,array,easy]
extra_tags: 
leetcode_slno: 26
featured: false
excerpt: ""
hidden: true
permalink: /:categories/:title

---

## Question

### 26. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-element/)

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

**Example 1:**
<pre>
Given nums = [1,1,2],

Your function should return length = 2, with the first 
two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
</pre>

**Example 2:**

<pre>
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first 
five elements of nums being modified to 0, 1, 2, 3, 
and 4 respectively.

It doesn't matter what values are set beyond the returned length.

</pre>

**Clarification:**

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

<pre>
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known 
by the caller.
// using the length returned by your function, it prints 
the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
</pre>

## Solutions

{% highlight python %}

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        nums[:] = set(nums)
        nums.sort()
        return len(nums)

# Runtime: 56 ms
# Memory Usage: 15 MB
{% endhighlight %}