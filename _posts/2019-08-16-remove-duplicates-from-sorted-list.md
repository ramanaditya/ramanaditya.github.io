---
layout: page
title: "83. Remove Duplicates from Sorted List"
subtitle: 
description: ""
author: "aditya"
comments: true
image: assets/images/code_image.jpg
meta_image: assets/images/code_image.jpg
categories: [code,leetcode]
tags: [python,linked-list,easy]
extra_tags: 
leetcode_slno: 83
featured: false
excerpt: ""
hidden: true
permalink: /:categories/:title

---

## Questions

### 83. [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

Given a sorted linked list, delete all duplicates such that each element appear only once.

**Example 1:**

```
Input: 1->1->2
Output: 1->2
```

**Example 2:**

```
Input: 1->1->2->3->3
Output: 1->2->3
```

## Solutions

{% highlight python %}

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        head_ref = head
        if not head:
            return head_ref
        while head.next != None:
            if head.val == head.next.val:
                head.next = head.next.next
            else:  
                head = head.next
        return head_ref

# Runtime: 48 ms
# Memory Usage: 14 MB

{% endhighlight %}

{% highlight python %}

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* deleteDuplicates(struct ListNode* head){
    struct ListNode* head_ref = head;
    if(head == NULL){
        return head;
    }
    while(head->next != NULL){
        if(head->val == head->next->val){
            head -> next = head -> next -> next;
        }
        else{
            head = head -> next;
        }
    }
    return head_ref;
}

# Runtime: 4 ms
# Memory Usage: 7.7 MB

{% endhighlight %}