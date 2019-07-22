---
layout: page
title: Multiple GitHub Accounts
subtitle: ""
description: "Using Multiple GitHub Account on the same system to push and pull"
author: "aditya"
comments: true
image: assets/images/2019-07-22-Multiple-GitHub-Account/github.jpg
categories: [blogs]
tags: [github,git]
extra_tags: 
featured: true
excerpt: "Using Multiple GitHub Account on the same system to push and pull"
---

### Generating SSH Key for the account

{% highlight bash %}
ssh-keygen -t rsa -C "Github-email-address"
Generating public/private rsa key pair.

{% endhighlight %}

{% highlight bash %}
Enter file in which to save the key (/Users/aditya/.ssh/id_rsa): /Users/aditya/.ssh/id_rsa_aditya
Created directory '/Users/aditya/.ssh'.
{% endhighlight %}

{% highlight bash %}
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /Users/aditya/.ssh/id_rsa_aditya.
Your public key has been saved in /Users/aditya/.ssh/id_rsa_aditya.pub.
The key fingerprint is:
SHA256:SPfrZGNVJ+djE6rUrCoOvLcnfDPqn9gRZ3L7cBoAiyE aditya@gmail.com
The key's randomart image is:
+---[RSA 2048]----+
|                 |
|                 |
|   E ....     o.o|
|    ..ooo.  o..=.|
|     ...S+.=.+ +.|
|    .     Oo+ . o|
|     o.  .** .   |
|      o=oX+.*    |
|     .+*O=+. .   |
+----[SHA256]-----+

{% endhighlight %}

### Copy your SSH key using below command

{% highlight bash %}
pbcopy < ~/.ssh/id_rsa_example.pub

{% endhighlight %}

{% highlight bash %}
Open GitHub -> Settings -> SSH and GPG keys -> New SSH Keys -> Copy the key -> Add SSH Key

{% endhighlight %}

### Setup Github Host

{% highlight bash %}
touch ~/.ssh/config

vi config

{% endhighlight %}

{% highlight editor %}

#first account
Host github.com-aditya
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_aditya
#second account
Host github-raman
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_raman

{% endhighlight %}

{% highlight git %}

git init
git remote set-url origin git@github-raman:{ username } / { repository name with .git extension eg., aditya.git}

git status
git add --all
git commit -m "commit message"
git push

{% endhighlight %}