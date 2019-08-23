---
layout: page
title: "144. Binary Tree Preorder Traversal"
subtitle: 
description: ""
author: "aditya"
comments: true
image: assets/images/code_pic1.jpg
meta_image: assets/images/code_pic1.jpg
categories: [code,leetcode]
tags: [python,tree,medium]
extra_tags: 
leetcode_slno: 144
eatured: false
excerpt: ""
hidden: true
permalink: /:categories/:title

---

## Questions

### 144. [Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

Given a binary tree, return the preorder traversal of its nodes' values.

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
```

**Follow Up:**

-  Recursive solution is trivial, could you do it iteratively?

## Solutions

{% highlight python %}

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.list = []
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        if root:
            if root.val:
                self.list.append(root.val)
            self.preorderTraversal(root.left)
            self.preorderTraversal(root.right)
        return self.list

# Runtime: 40 ms
# Memory Usage: 13.9 MB

{% endhighlight %}