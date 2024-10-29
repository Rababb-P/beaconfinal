const l="data:text/markdown;base64,CkRlcGVuZGluZyBvbiB0aGUgZGF5LCB3aGF0IHlvdSBhcmUgZG9pbmcsIGFuZCB3aG8geW91IGFyZSB3aXRoLCB5b3UgbWF5CmJlIGFibGUgdG8gYXZvaWQgZ3JpZWYuIEhvd2V2ZXIsIGdyaWVmIGNhbiBzb21ldGltZXMgYmUgb3ZlcndoZWxtaW5nOwp3aGVuIG9uZSBpcyBncmlldmluZywgb25lIGlzIHN1ZmZlcmluZyBlbW90aW9uYWxseS4gV2UgaGF2ZSB0bwp1bmRlcnN0YW5kIHRoYXQgaXQgaXMgbm90IHNvbWV0aGluZyB0byBiZSBhc2hhbWVkIG9mLiBHcmllZiBpcyBhIG5hdHVyYWwKcmVzcG9uc2UgdG8gbG9zcy4gRGVhbGluZyB3aXRoIGl0IGRvZXMgbm90IGhhdmUgYSBzZXQgdGltZWxpbmUsIGFuZCB0aGUKcGFpbiBjYXVzZWQgYnkgaXQgZWJicyBhbmQgZmxvd3MgdGhyb3VnaCB5b3UuIEl0IHdpbGwgdmFyeSBpbiBpbnRlbnNpdHkKYW5kIGFwcGVhciB0byBiZSBnb25lIGF0IHNvbWUgcG9pbnRzLCBidXQgeW91IGNhbiBiZSBoaXQgd2l0aCBhbm90aGVyCndhdmUgb2YgZ3JpZWYgZXZlbiB5ZWFycyBhZnRlciB5b3VyIGxvc3MuCjxicj48YnI+CkdyaWVmIGlzIHVzdWFsbHkgY2F1c2VkIGJ5IHRoZSBsb3NzIG9mIHNvbWVvbmUuIEl0IGlzIGhhcmQgdG8gcmVjb2duaXplCndoeSB3ZSByZWFjdCB0aGUgd2F5IHdlIGRvLiBTb21lIHJlYWN0IGluIHRoZSBtb3JlIGNvbW1vbiB3YXkgd2l0aCB0ZWFycwphbmQgb3ZlcmFsbCBzYWRuZXNzLiBPdGhlciB0aW1lcywgZ3JpZWYgY2FuIG1hbmlmZXN0IGluIG1vcmUKdW5wcmVkaWN0YWJsZSB3YXlzIHN1Y2ggYXMgdGhyb3VnaCBpbXBhdGllbmNlLCBzaGFtZSwgYW5kIGV2ZW4KcGh5c2ljYWxseSwgaW4gdGhlIGZvcm0gb2YgaWxsbmVzcy4gU29tZSBldmVuIGdpdmUgdGhlIGltcHJlc3Npb24gb2YKYmVpbmcgaW5kaWZmZXJlbnQgb3IgZGlzY29ubmVjdGVkIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBvciBub3QgdGhleeKAmXJlCmFjdHVhbGx5IGluIHBhaW4uCjxicj48YnI+CldoZW4gZGVhbGluZyB3aXRoIGxvbmctdGVybSBncmllZiwgeW91IGNhbiBmaW5kIGEgd2F5IHRvIGFwcHJlY2lhdGUgd2hhdApjYW1lIG91dCBvZiB5b3VyIGxvc3MuIElmIHlvdSBuZXZlciBoYWQgdGhpcyBwZXJzb24sIHlvdSB3b3VsZCBoYXZlCm5ldmVyIGV4cGVyaWVuY2VkIHRoZWlyIHBvc2l0aXZlIGltcGFjdC4gSGVhbHRoeSBjb3BpbmcgYWxzbyBpbmNsdWRlcwphc2tpbmcgZm9yIGhlbHAuIE9mdGVuLCB0aG9zZSBhcm91bmQgeW91IHdobyBhcmVu4oCZdCBleHBlcmllbmNpbmcgeW91cgpsb3NzIHdvbuKAmXQgcmVhbGl6ZSB5b3UgYXJlIGdyaWV2aW5nLiBFbW90aW9uYWwgZGlzdHJlc3MgaXNuJ3QgYWx3YXlzCm9idmlvdXM7IGl0IGlzIG5vdCBsaWtlIGhhdmluZyBhIGJyb2tlbiBhcm0uIEl04oCZcyBpbXBvcnRhbnQgdG8gYXNrIGZvcgpoZWxwIHdoZW4geW91IG5lZWQgaXQuIE90aGVycyBtYXkgaGF2ZSBvciBoYWQgc2ltaWxhciBleHBlcmllbmNlcyB0aGF0CmNhbiBoZWxwIHlvdSB0aHJvdWdoIHlvdXIgZ3JpZWYsIHNvIHlvdSBhcmUgbm90IGFsb25lLiBSZWFjaGluZyBvdXQgbm93CndpbGwgbWFrZSBpdCBlYXNpZXIgaW4gdGhlIGZ1dHVyZS4KPGJyPjxicj4KSGVyZSBhcmUgc29tZSByZXNvdXJjZXMgdGhhdCBjYW4gYXNzaXN0IHlvdSBkdXJpbmcgZGlmZmljdWx0IHRpbWVzOgoKS2lkcyBIZWxwIFBob25lCjxicj4KMS04MDAtNjY4LTY4NjgKPGJyPjxicj4KCnd3dy55b3JrdG93bmZhbWlseXNlcnZpY2VzLmNvbSAoc3BlY2lmaWMgaGVscGxpbmVzLCBncmllZiBzZXNzaW9ucywKYW5kIG90aGVyIHByb2dyYW1zIGF2YWlsYWJsZSkKCkhvcGUgZm9yIFdlbGxuZXNzIEhlbHBsaW5lCgoxLTg1NS0yNDItMzMxMDxicj4KCkJsYWNrIFlvdXRoIEhlbHBsaW5lCgoxLTgzMy0yOTQtODY1MAoKUGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IHRoZXNlIGhlbHBsaW5lcyBpZiB5b3UgYXJlIHN0cnVnZ2xpbmc7CnRoZXkgZXhpc3QgdG8gaGVscCB1cyEKCldpdGggdGhlIGxvc3Mgb2Ygc29tZW9uZSwgeW91IG1heSBuZXZlciByZWFsbHkgbW92ZSBvbiwgdGhvdWdoIHlvdSBjYW4KbW92ZSBmb3J3YXJkLgo=";export{l as default};