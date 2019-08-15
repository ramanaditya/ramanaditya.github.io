---
layout: page
title: "35. Search Insert Position"
subtitle: 
description: ""
author: "aditya"
comments: true
image: assets/images/code_image.jpg
meta_image: assets/images/code_image.jpg
categories: [code,leetcode]
tags: [python,array,easy]
extra_tags: 
leetcode_slno: 35
featured: false
excerpt: ""
hidden: true
permalink: /:categories/:title

---

## Questions

### 35. [Search Insert Position](https://leetcode.com/problems/search-insert-position/)

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

**Example 1:**

```
Input: [1,3,5,6], 5
Output: 2
```

**Example 2:**

```
Input: [1,3,5,6], 2
Output: 1
```

**Example 3:**

```
Input: [1,3,5,6], 7
Output: 4
```

**Example 4:**

```
Input: [1,3,5,6], 0
Output: 0
```

## Solutions

{% highlight python %}

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        i = 0
        j = len(nums)
        while i < j:
            if nums[i] >= target:
                return i
            i += 1
        return i

# Runtime: 56 ms
# Memory Usage: 14.3 MB

{% endhighlight %}

{% highlight cpp %}

class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        if(target > nums.back()){
            return nums.size();
        }
        if(target < nums[0]){
            return 0;
        }
        int i = 0,j;
        j = nums.size();
        while(i<j){
            if(nums[i] >= target){
                return i;
            }
            i += 1;
        }
        return i;
    }
};

# Runtime: 4 ms
# Memory Usage: 8.9 MB

{% endhighlight %}
