---
layout: page
title: "145. Binary Tree Postorder Traversal"
subtitle: 
description: ""
author: "aditya"
comments: true
image: assets/images/code_pic1.jpg
meta_image: assets/images/code_pic1.jpg
categories: [code,leetcode]
tags: [python,tree,hard]
extra_tags: 
leetcode_slno: 145
eatured: false
excerpt: ""
hidden: true
permalink: /:categories/:title

---

## Questions

### 145. [Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

Given a binary tree, return the postorder traversal of its nodes' values.

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
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
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        if root:
            self.postorderTraversal(root.left)
            self.postorderTraversal(root.right)
            if root.val:
                self.list.append(root.val)
        return self.list

# Runtime: 36 ms
# Memory Usage: 14 MB

{% endhighlight %}