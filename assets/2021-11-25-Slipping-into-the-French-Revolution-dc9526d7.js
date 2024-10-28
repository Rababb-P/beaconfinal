const G="data:text/markdown;base64,CkluIHRoZSBzdW1tZXIgb2YgMTkwMSwgdHdvIEVuZ2xpc2ggd29tZW4gd2Fsa2luZyB0aGUgZ3JvdW5kcyBvZiB0aGUKUGFsYWNlIG9mIFZlcnNhaWxsZXMgbm90aWNlZCBzbWFsbCBkaXN0b3J0aW9ucyBpbiB0aGVpciByZWFsaXR5LCBzdWNoIGFzCnRoZSB3aW5kIG5vdCBibG93aW5nIGluIHRoZSB0cmVlcywgYSBsYWNrIG9mIGxpZ2h0IGFuZCBzaGFkZSBlZmZlY3QsIGFuZAp0aGUgd29ybGQgdGFraW5nIG9uIGEgbGlmZWxlc3MgYW5kIGZsYXQgYXBwZWFyYW5jZS4gQ2hhcmxvdHRlIEFubmUKTW9iZXJseSBhbmQgRWxlYW5vciBKb3VyZGFpbiBhcmUgcmVjb3JkZWQgYXMgdGhlIGZpcnN0IHBlb3BsZSB0bwpleHBlcmllbmNlIGEgdGltZXNsaXAgZHVyaW5nIHRoZWlyIHZpc2l0IHRvIFBhcmlzIGluIHRoZSBzdW1tZXIgb2YgMTkwMS4KVGhleSB3cm90ZSBhIGJvb2ssIGNhbGxlZCAqQW4gQWR2ZW50dXJlKiwgaW4gMTkxMSB0byBkZXNjcmliZSB0aGVpcgpleHBlcmllbmNlLgoKVGltZXNsaXBzIGFyZSBhIHBhcmFub3JtYWwgcGhlbm9tZW5vbiB3aGVyZSBwZW9wbGUgZ28gYWJvdXQgdGhlaXIgZGF5CmFuZCBhcmUgdGVtcG9yYXJpbHkgdHJhbnNwb3J0ZWQgaW50byBlaXRoZXIgdGhlIHBhc3Qgb3IgZnV0dXJlLiBIb3dldmVyLAp0aGV5IHR5cGljYWxseSByZW1haW4gaW4gdGhlIHNhbWUgbG9jYXRpb24gdGhyb3VnaCBzdXBlcm5hdHVyYWwgbWVhbnMKaW5zdGVhZCBvZiB0ZWNobm9sb2dpY2FsIG1lYW5zLgoKQWNjb3JkaW5nIHRvIHRoZWlyIGJvb2ssIGFzIE1vYmVybHkgYW5kIEpvdXJkYWluIGNvbnRpbnVlZCB0aGUK4oCcdW5uYXR1cmFs4oCdIGFwcGVhcmFuY2Ugb2YgdGhlaXIgc3Vycm91bmRpbmdzIHN0YXJ0ZWQgdG8gZmFkZSBhd2F5LiBUaGV5CmVuY291bnRlcmVkIGEgbWFuIHRoZXkgZm91bmQg4oCccmVwdWxzaXZl4oCdIHdpdGgg4oCccm91Z2ggc2tpbuKAnSBhbmQgYSB5b3VuZwp3b21hbiwgd2VhcmluZyBvdXRkYXRlZCBjbG90aGluZywgd2hvIHdhcyBza2V0Y2hpbmcgb24gdGhlIGdyYXNzLiBPbmUgb2YKdGhlIHdvbWVuIGZlbHQgdGhlIG5lZWQgdG8gdHVybiBhd2F5IGZyb20gdGhlIHNrZXRjaGluZyB3b21hbiBhcyBoZXIKcHJlc2VuY2UgbWFkZSB0aGUgd29tYW4gZmVlbCBpbmNyZWRpYmx5IGFubm95ZWQuIFRoZXkgd2VyZSBkaXJlY3RlZCB0bwphbiBlbnRyYW5jZSBoYWxsIGJ5IGEgamF1bnR5IG1hbiwgd2hlcmUgdGhleSB3aXRuZXNzZWQgYSB3ZWRkaW5nIHBhcnR5LgpGcm9tIHRoZXJlLCB0aGUgd29tZW4gZGVjaWRlZCB0byB0YWtlIGEgY2FycmlhZ2UgYmFjayB0byBKb3VyZGFpbuKAmXMKYXBhcnRtZW50LiBUaGV5IGZvdW5kIHRoaXMgZXhwZXJpZW5jZSBzdHJhbmdlIHNvIHRoZXkgZGVjaWRlZCB0byByZXR1cm4KdG8gdGhlIFBhbGFjZSBvZiBWZXJzYWlsbGVzIG9uIGEgbGF0ZXIgZGF0ZS4gVXBvbiB0aGVpciByZXR1cm4sIHRoZQp3b21lbiByZWFsaXplZCB0aGF0IG1hbnkgbGFuZG1hcmtzIHRoZXkgaGFkIGVuY291bnRlcmVkIGR1cmluZyB0aGVpcgppbml0aWFsIHZpc2l0IHdlcmUgbm8gbG9uZ2VyIHRoZXJlIGFuZCBub3RpY2VkIGxhcmdlIG51bWJlcnMgb2YgcGVvcGxlCmNyb3dkaW5nIHRoZSBhcmVhcyBvZiB0aGUgcGFsYWNlIHRoYXQgaGFkIGJlZW4gZW1wdHkgdGhlIGRheSBvZiB0aGVpcgppbml0aWFsIHZpc2l0LiBUaGV5IGZvdW5kIHRoaXMgb2RkLCBhcyB0aGV5IGhhZCBnb25lIGR1cmluZyB0aGUgZGF5IGFuZApzcGVudCBob3VycyBpbiB0aGUgUGFsYWNlIHdpdGhvdXQgZW5jb3VudGVyaW5nIHBlb3BsZSBvdGhlciB0aGFuIHRoZQphZm9yZW1lbnRpb25lZCBjaGFyYWN0ZXJzLiBUaGV5IG1hZGUgaW5xdWlyaWVzLCBjaGVja2luZyBpZiB0aGUgcGFsYWNlCmhhZCBiZWVuIGJvb2tlZCBvbiB0aGUgZGF5IG9mIHRoZWlyIGluaXRpYWwgdmlzaXQsIGJ1dCB0aGVyZSB3ZXJlIG5vCnByaXZhdGUgYm9va2luZ3MgdGhhdCBkYXkuIFRoZXkgcmVhbGl6ZWQgbGF0ZXIgdGhhdCB0aGUgcGVvcGxlIHRoZXkKZW5jb3VudGVyZWQgcmVzZW1ibGVkIG1lbWJlcnMgb2YgTWFyaWUgQW50b2luZXR0ZeKAmXMgY291cnQuIFRoZSBtYW4gd2l0aAp0aGUg4oCccm91Z2ggc2tpbuKAnSB3YXMgdGhlIDE4dGgtY2VudHVyeSBGcmVuY2ggbm9ibGVtYW4sIENvbXRlIGRlClZhdWRyZXVpbC4gVGhlIHdvbWFuIG9uIHRoZSBncmFzcyBpcyBiZWxpZXZlZCB0byBoYXZlIGJlZW4gTWFyaWUKQW50b25pZXR0ZSBoZXJzZWxmLCBvbiB0aGUgc2FtZSBkYXkgc2hlIGxlYXJuZWQgb2YgdGhlIG1vYiB0aGF0IHN0b3JtZWQKdGhlIFBhbGFjZSBvZiBUdWlsZXJpZXMuIEhvdyB0aGVzZSB3b21lbiDigJxzbGlwcGVk4oCdIGludG8gdGhlIHN0YXJ0IG9mIHRoZQpGcmVuY2ggUmV2b2x1dGlvbiByZW1haW5zIHVuY2xlYXIuCgpUaGVyZSBhcmUgYSBtdWx0aXR1ZGUgb2YgZXhwbGFuYXRpb25zIGZvciB0aGUgcGhlbm9tZW5vbiBNb2Jlcmx5IGFuZApKb3VyZGFpbiwgYW5kIHRob3VzYW5kcyBtb3JlIGV4cGVyaWVuY2VkLiBTb21lIGFyZSByb290ZWQgaW4gdGhlCnBhcmFub3JtYWwsIHJhbmdpbmcgZnJvbSBhbGllbiBpbnRlcnZlbnRpb24gdG8gdGhvc2Ugd2hvIGV4cGVyaWVuY2Ugc2FpZApwaGVub21lbmEgYmVpbmcgYm9ybiB3aXRoIHN1cGVybmF0dXJhbCDigJxnaWZ0c+KAnS4gT3RoZXIgZXhwbGFuYXRpb25zIHBvaW50CnRvd2FyZHMgaHlzdGVyaWEsIHNldmVyZSBtZW50YWwgaWxsbmVzcywgb3Igc29tZSBraW5kIG9mIHBzeWNob2xvZ2ljYWwKZGlzdHVyYmFuY2UgdGhhdCBhbHRlcmVkIG9uZeKAmXMgcGVyY2VwdGlvbiBvZiB0aGVpciBwcmVzZW50IHJlYWxpdHkuCkRpZmZlcmVudCBhcmd1bWVudHMgY29uY2x1ZGUgdGhhdCBjdW5uaW5nIGluZGl2aWR1YWxzIGFyZSBwdXR0aW5nIHVwIGEKZmFjYWRlIGZvciBwdWJsaWMgYXR0ZW50aW9uLiBUaGUgbW9zdCBwbGF1c2libGUgZXhwbGFuYXRpb24gc2VlbXMgdG8gYmUKYSBtaXh0dXJlIG9mIGhvYXhlcyBhbmQgcG9zc2libGUgcHN5Y2hvbG9naWNhbCBhbmQgbWVudGFsIGFpbG1lbnRzLiBBCnZhcmlldHkgb2YgZGlmZmVyZW50IGFuZCBzZWVtaW5nbHkgaGFybWxlc3MgZmFjdG9ycyBjYW4gY29udHJpYnV0ZSB0bwpkaXN0dXJiYW5jZXMgaW4gdGhlIG5lcnZvdXMgc3lzdGVtLCB3aGljaCBtYXkgc2VuZCBtaXhlZCBzaWduYWxzIHRvIHRoZQpicmFpbiB3aGljaCBjb3VsZCBhbHRlciBvbmXigJlzIHBlcmNlcHRpb24gb2YgcmVhbGl0eS4gVGltZXNsaXBzIG1ha2UgdXMKdGhpbmsgaWYgb3VyIGNvbnNjaWVuY2UgY2FuIGJlIHRydXN0ZWQgdG8gYmUgaG9uZXN0IGF0IGFsbCB0aW1lcy4KCkltYWdlIHNvdXJjZToKClsqaHR0cHM6Ly9waXhlbHMuY29tL2ZlYXR1cmVkLzEtcGFsYWNlLW9mLXZlcnNhaWxsZXMtcGl4YWJheS5odG1sLypdKGh0dHBzOi8vcGl4ZWxzLmNvbS9mZWF0dXJlZC8xLXBhbGFjZS1vZi12ZXJzYWlsbGVzLXBpeGFiYXkuaHRtbC8p";export{G as default};
