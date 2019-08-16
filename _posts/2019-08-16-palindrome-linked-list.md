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
tags: [python,cpp,linked-list,easy]
extra_tags: 
leetcode_slno: 35
featured: false
excerpt: ""
hidden: true
permalink: /:categories/:title

---

## Questions

### 35. [Search Insert Position](https://leetcode.com/problems/palindrome-linked-list/)

Given a singly linked list, determine if it is a palindrome.

**Example 1:**

```
Input: 1->2
Output: false
```

**Example 2:**

```
Input: 1->2->2->1
Output: true
```

**Follow up:**
Could you do it in O(n) time and O(1) space?



## Solutions

{% highlight python %}

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        a = []
        while head != None:
            a.append(head.val)
            head = head.next
        i = 0
        j = len(a) - 1
        while i < j:
            if a[i] != a[j]:
                return False
            i += 1
            j -= 1
        return True

# Runtime: 76 ms
# Memory Usage: 24.7 MB

{% endhighlight %}


{% highlight cpp %}

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool isPalindrome(ListNode* head) {
        struct ListNode *head_ref = head;
        int count = 0;
        if(head == NULL){
            return true;
        }
        while(head!=NULL){
            count += 1;
            head = head -> next;
        }
        int a[count];
        int i = 0,j;
        while(head_ref != NULL){
            a[i] = head_ref -> val;
            i += 1;
            head_ref = head_ref -> next;
        }
        j = count;
        i = 0;
        while(i<j){
            if(a[i] != a[j - 1]){
                return false;
            }
            i += 1;
            j -= 1;
        }
        return true;
    }
};

# Runtime: 20 ms
# Memory Usage: 13.1 MB

{% endhighlight %}
