---
layout: page
title: "94. Binary Tree Inorder Traversal"
subtitle: 
description: ""
author: "aditya"
comments: true
image: assets/images/code_pic1.jpg
meta_image: assets/images/code_pic1.jpg
categories: [code,leetcode]
tags: [python,tree,medium]
extra_tags: 
leetcode_slno: 94
eatured: false
excerpt: ""
hidden: true
permalink: /:categories/:title

---

## Questions

### 94. [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

Given a binary tree, return the inorder traversal of its nodes' values.

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
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
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        if root:
            self.inorderTraversal(root.left)
            if root.val:
                self.list.append(root.val)
            self.inorderTraversal(root.right)
        return self.list

# Runtime: 40 ms
# Memory Usage: 13.8 MB

{% endhighlight %}