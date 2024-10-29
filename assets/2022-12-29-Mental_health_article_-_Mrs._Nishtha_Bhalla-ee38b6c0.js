const G="data:text/markdown;base64,CgpXaGF0IGlzIHN0cmVzcz8gSW4geW91ciBQaHlzaWNzIGNsYXNzIHN0cmVzcyBpcyB0aGUgd2VpZ2h0IG9yIHRlbnNpb24gCmV4ZXJ0ZWQgb24gYW4gb2JqZWN0OyBpbiB5b3VyIEVuZ2xpc2ggY2xhc3MgaXQgbWlnaHQgcmVmZXIgdG8gdGhlIAplbXBoYXNpcyBvciBpbXBvcnRhbmNlIG9mIGEgd29yZCBpbiBhIHNlbnRlbmNlLiBCdXQgdGhhdOKAmXMgbm90IHRoZSAKc3RyZXNzIG1vc3Qgb2YgdXMgdGhpbmsgb2Ygd2hlbiB3ZSB0YWxrIGFib3V0IHN0cmVzcy4gCkktaGF2ZW7igJl0LXN0dWRpZWQtZm9yLW15LXRlc3Qgc3RyZXNzLCBJLWhhdmVu4oCZdC1tYXJrZWQtYWxsLXRob3NlLXRlc3RzIApzdHJlc3MsIEktaGF2ZS1uby1pZGVhLXdoYXQtSS1hbS1kb2luZy1mb3ItdGhlLWhvbGlkYXlzIHN0cmVzcy4KCldoYXQgaXMgdGhpcyB0eXBlIG9mIHN0cmVzcz8gV2hhdCBjYXVzZXMgaXQ/IEFuZCBpcyB0aGVyZSBhIHdheSBvdXQgb2YKaXQ/CgpMZXTigJlzIHN0YXJ0IHdpdGggYSB3b3JraW5nIGRlZmluaXRpb24gb2YgdGhpcyBtZW50YWwgc3RyZXNzIOKAkyBhIHRlbnNpb24Kb3IgaW1iYWxhbmNlIGluIHRoZSBtZW50YWwgZmFicmljIG9mIGEgc2VudGllbnQgYmVpbmcuIFdoYXQgY2F1c2VzIGl0PwpJbiB0aGUgd29yZHMgb2Ygb25lIG9mIG15IHRlYWNoZXJzLSBpdCBpcyBjYXVzZWQgYnkgZ2l2aW5nIFVOV0lTRQphdHRlbnRpb24gb3IgZW1waGFzaXMgdG8gdGhlIGZhdWx0cyBpbiBvdGhlcnMsIHNpdHVhdGlvbnMsIG9yIHlvdXJzZWxmLgoKTm8gb25lIGlzIHNheWluZyB0aGUgcGVvcGxlIHlvdSBkZWFsIHdpdGggKHRlYWNoZXJzLyBwYXJlbnRzLyBmcmllbmRzLwpzdHVkZW50cy8gY29sbGVhZ3Vlcy8gb3IgeW91IHlvdXJzZWxmKSBhcmUgcGVyZmVjdC4gSXQgcmVxdWlyZXMgY3JpdGljYWwKdGhpbmtpbmcgdG8ga25vdyB3aGF0IGlzIHJpZ2h0IGFuZCB3aGF0IGlzIHdyb25nLCBzbyB5b3UgYXJlIHNtYXJ0IHRvCmtub3cganVzdCB3aGF0IGlzIHdyb25nIGhlcmUuIEl0IGlzIGEgbW9yYWwgaW1wZXJhdGl2ZSB0aGF0IHdlIGRvCnNvbWV0aGluZyBhYm91dCBzaXR1YXRpb25zIHRoYXQgbmVlZCBjb3JyZWN0aW9uLCBzbyB5b3UgYXJlIGJlaW5nCm1vcmFsbHkgcmVzcG9uc2libGUgaW4gd2FudGluZyB0byBjaGFuZ2UgdGhlIHRoaW5ncyB0aGF0IG5lZWQgdG8gYmUKY2hhbmdlZC4gQnV0IHdhbGtpbmcgYXJvdW5kIGluIG1vcmFsIGluZGlnbmF0aW9uIGF0IGV2ZXJ5dGhpbmcgdGhhdCBpcwp3cm9uZyB3aXRoIHRoZSB3b3JsZCDigJMgaXMgbm90IHRoZSBwYXRoIG9mIHdpc2RvbS4gSWYgeW91IGZpbmQgeW91cnNlbGYKc3RyZXNzZWQgb3V0IOKAkyBjaGFuY2VzIGFyZSB5b3UgaGF2ZSBhY3F1aXJlZCBhIGhpZ2ggZGVncmVlIG9mIGV4cGVydGlzZQppbiDigJhmYXVsdCBmaW5kaW5n4oCZLiBXaGlsZSBpdCBpcyBhIHVzZWZ1bCBza2lsbCB0byBoYXZlLCBsaWtlIGFueSBvdGhlcgp0b29sIGl0IG5lZWRzIHRvIGJlIHVuZGVyIHRoZSBjb25zY2lvdXMgY29udHJvbCBvZiBpdHMgaGFuZGxlci4gVGhlbiB0aGUKd2F5IG91dCBvZiBvdXIgc3RyZXNzIGlzIHRoZSB3aXNkb20gdG8gZ2l2ZSBvbmx5IHNraWxsZnVsIGF0dGVudGlvbiB0bwp0aGUgZmF1bHRzIGluIHBlb3BsZSBhbmQgc2l0dWF0aW9ucyDigJMganVzdCBhcyBtdWNoIGFzIGlzIG5lZWRlZCDigJMgbm90Cm1vcmUsIG5vdCBsZXNzLiBUaGlzIGlzIHRoZSB0cmFpbmluZyB0aGF0IG5lZWRzIHRvIGJlIHVuZGVydGFrZW4uCgpVbmZvcnR1bmF0ZWx5LCBhcyBhIHNvY2lldHkgd2Ugc3BlbmQgc28gbXVjaCB0aW1lIGxlYXJuaW5nIG1hdGgsCnNjaWVuY2UsIGFuZCBFbmdsaXNoIGJ1dCBub3QgZW5vdWdoIGluIGxlYXJuaW5nIGFib3V0IG91ciBvd24gbWVudGFsIOKAkwplbW90aW9uYWwgc3RhdGVzLiBXZSBleHBlY3Qgc3R1ZGVudHMgdG8gZm9jdXMsIGNvbmNlbnRyYXRlLCBwYXkKYXR0ZW50aW9uLCBidXQgd2UgcmFyZWx5IGV2ZXIgdGVhY2ggdGhlbSBIT1cgdG8gcGF5IGF0dGVudGlvbiBpbiB0aGUKZmlyc3QgcGxhY2UuIEZvcnR1bmF0ZWx5LCB0aGlzIGlzIGEgcHJvYmxlbSB0aGF0IGhhcyBiZWVuIGVuY291bnRlcmVkLApleGFtaW5lZCwgYW5kIHNvbHZlZCBieSBhbmNpZW50IGNpdmlsaXphdGlvbnMuCgpUaGUgZWFzdGVybiBwYXJhZGlnbSBwcm9wb3NlcyBhIHRyaWZvbGQgYXBwcm9hY2ggdG8gd29yayB5b3Vyc2VsZiBvdXQgb2YKc3RyZXNzIOKAkyAxLWJ5IHRyYWluaW5nIGluIG1vcmFsIGNvbmR1Y3QsIDItIGJ5IHRyYWluaW5nIGluIHRoZSBhcnQgb2YKcGF5aW5nIGF0dGVudGlvbiwgYW5kIDMtIGJ5IHRyYWluaW5nIGluIHRoZSB3aXNkb20gdGhhdCBkaXNjZXJucyB3aGF0IHRvCnBheSBhdHRlbnRpb24gdG8uIFNvIGhvdyBkb2VzIG9uZSBzdGFydCBvbiB0aGUgcGF0aD8geW91IGFzay4gV2VsbCwgZmluZAphIHRlYWNoZXIuIFRoZSB2b2ljZSBvZiBhbm90aGVyIGlzIHRoZSBmaXJzdCByZXF1aXJlbWVudCBmb3IgbW9zdCBvZiB1cwp0byBldmVuIGJlZ2luIHRvIGNvbXByZWhlbmQgdGhhdCBzdHJlc3MgaXMgbm90IGluZXZpdGFibGUsIGl0IGlzIG5vdApuYXR1cmFsLCBhbmQgaXQgaXMgbm90IGEgY29tcHVsc29yeSBxdWVzdGlvbiBvbiB0aGlzIHRlc3Qgb2YgbGlmZS4gSXQgaXMKb3B0aW9uYWwuIEkgY2FuIGNob29zZSB0byBsaXZlIGEgbGlmZSBmcmVlIG9mIHN0cmVzcywgaXQgaXMgcG9zc2libGUsIGl0CmlzIHBsYXVzaWJsZSwgYW5kIHdpdGggdGhlIHJpZ2h0IGVmZm9ydCBpdCBpcyBlYXNpbHkgdmVyaWZpYWJsZSBmb3IKb25lc2VsZi4K";export{G as default};