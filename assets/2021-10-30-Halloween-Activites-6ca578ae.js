const G="data:text/markdown;base64,CgpUaGluZ3MgYXJlIGZpbmFsbHkgc3RhcnRpbmcgdG8gZ2V0IGJhY2sgdG8gbm9ybWFsIGluIDIwMjEsIHNvIGhlcmUgYXJlCnNvbWUgSGFsbG93ZWVuIGFjdGl2aXRpZXMgeW91IGNhbiBkbyB3aXRoIGZyaWVuZHMgYW5kIGZhbWlseSB0aGF0IHdpbGwKcHV0IHlvdSBpbiB0aGUgSGFsbG93ZWVuIHNwaXJpdCEKCioqMS4gQ2FydmUgUHVtcGtpbnMqKgoKIENhcnZpbmcgcHVtcGtpbnMgaXMgYSBjbGFzc2ljIEhhbGxvd2VlbiBhY3Rpdml0eSB0aGF04oCZcyBhbHdheXMKIGV4Y2l0aW5nLCBmdW4gYW5kIGhhcyBhIHRlbmRlbmN5IHRvIG1ha2UgYSBtZXNzLiBJdCBsZXRzIHlvdSBnZXQKIGNyZWF0aXZlIHdpdGggeW91ciBwdW1wa2luIGRlc2lnbnMsIGFuZCB0aGUgZXhwZXJpZW5jZSBkZWZpbml0ZWx5CiB3b27igJl0IGRpc2FwcG9pbnQgaWYgeW91IGRlY2lkZSB0byBwYXJ0aWNpcGF0ZSBpbiB0aGUgZmVzdGl2aXRpZXMgdGhpcwogeWVhci4KCioqMi4gR29pbmcgdG8gSGF1bnRlZCBIb3VzZXMqKgoKIElmIHlvdSByZWFsbHkgd2FudCB0byBnZXQgaW50byB0aGUgc3Bvb2t5IHNwaXJpdCB0aGlzIHllYXIsIGdvaW5nIHRvIGEKIGhhdW50ZWQgaG91c2UgaXMgb25lIG9mIHRoZSBiZXN0IHdheXMgdG8gZG8gaXQuIEV2ZW4gbWFraW5nIHlvdXIgb3duCiBoYXVudGVkIGhvdXNlIGlzIGEgZ3JlYXQgaWRlYSEgUmVtZW1iZXIgdG8gbWFrZSBpdCBkYXJrLCBlZXJpZSBhbmQKIGZ1bGwgb2YgY3JlZXB5IGdob3N0cyBhbmQgZ2hvdWxzIQoKKiozLiBEZWNvcmF0aW5nIGZvciBIYWxsb3dlZW4qKgoKIFlvdSB3b27igJl0IGV2ZXIgaGF2ZSBtb3JlIGZ1biBkZWNvcmF0aW5nIGZvciBhbnkgb3RoZXIgaG9saWRheSwgZXZlbgogQ2hyaXN0bWFzLCB0aGFuIHlvdSB3aWxsIGZvciBIYWxsb3dlZW4uIFlvdSBjYW4gYWRkIGNhdXRpb24gdGFwZSwKIGdyYXZlcywgbXlzdGVyaW91cyBsaWdodHMsIGNvYndlYnMgLSBhbmQgdGhlIGxpc3QgbmV2ZXIgZW5kcy4gQWZ0ZXIKIGFsbCwgdGhlIG1vcmUgZWxhYm9yYXRlIHlvdXIgaG91c2UgaXMgZGVjb3JhdGVkLCB0aGUgbW9yZQogdHJpY2stb3ItdHJlYXRlcnMgeW91J3JlIGxpa2VseSB0byBkcmF3IQoKKio0LiBNYWtpbmcgeW91ciBvd24gSGFsbG93ZWVuIGNvc3R1bWUqKgoKIEhhbGxvd2VlbiByZWFsbHkgYWxsb3dzIHlvdSB0byBleHByZXNzIHlvdXJzZWxmIHRocm91Z2ggeW91ciBjb3N0dW1lcy4KIFlvdSBjYW4gYmUgYW55b25lIG9yIGFueXRoaW5nIHlvdSB3YW50IHRvIGJlLCBhbmQgbWFraW5nIHlvdXIgY29zdHVtZQogeW91cnNlbGYganVzdCBtYWtlcyBpdCB0aGF0IG11Y2ggbW9yZSBwZXJzb25hbC4gWW91IGNhbiBmaW5kIGRpZmZlcmVudAogcGllY2VzIG9mIGNsb3RoaW5nIGZyb20gYSB2YXJpZXR5IG9mIHN0b3JlcyBhbmQgcHV0IHRoZW0gdG9nZXRoZXIsIG9yCiB5b3UgY2FuIHRyeSBtYWtpbmcgZXZlcnl0aGluZyBieSB5b3Vyc2VsZi4gVGhlcmUgaXMgbm8gbGltaXQgdG8geW91cgogY3JlYXRpdml0eSEKCioqNS4gVGVsbGluZyBTY2FyeSBTdG9yaWVzKioKCiAgVGhlIOKAmHRyZWF04oCZIGluIHRoZSBzYXlpbmcgdHJpY2stb3ItdHJlYXQgaXMgYWx3YXlzIGVuam95YWJsZSwgYnV0IHRoZQogIOKAmHRyaWNr4oCZIGNhbiBiZSBlcXVhbGx5IGFtdXNpbmcgYXMgd2VsbC4gVGhlcmUgaXMgbm90aGluZyBiZXR0ZXIgdGhhbgogIHNjYXJpbmcgeW91ciBmcmllbmRzIG9uIEhhbGxvd2VlbiwgYW5kIHlvdSBjYW4gdGFrZSBpdCBvbmUgc3RlcAogIGZ1cnRoZXIgYnkgY3JlYXRpbmcgYSBzdG9yeSB0byBtYWtlIHRoZSBzY2FyZSBtb3JlIGJlbGlldmFibGUuIFVzZQogIHByb3BzLCBwbGFuIHlvdXIgc3RvcmllcyBhaGVhZCBvZiB0aW1lIGFuZCBtYWtlIHN1cmUgeW91IGJyaW5nIGEKICBjYW1lcmEsIGJlY2F1c2UgdGhlIGxvb2sgb24geW91ciBmcmllbmRz4oCZIGZhY2VzIHdoZW4gdGhleSBzY3JlYW0gd2lsbAogIGJlIGEgbW9tZW50IHlvdSB3b27igJl0IHdhbnQgdG8gZm9yZ2V0IQoKCk1ha2UgdGhlIG1vc3Qgb3V0IG9mIHlvdXIgSGFsbG93ZWVuIHRoaXMgeWVhciBieSB0cnlpbmcgb3V0IGF0IGxlYXN0Cm9uZSBvZiB0aGVzZSBncmVhdCBIYWxsb3dlZW4gYWN0aXZpdGllcyEgSGF2ZSBhIEhhcHB5IEhhbGxvd2VlbiBNQ0khCgoKKkNyZWF0aXZlIENvbW1vbnM6Cmh0dHBzOi8vc2VhcmNoLmNyZWF0aXZlY29tbW9ucy5vcmcvcGhvdG9zL2ZkZDE4YmNmLTM0NDUtNDdhMi05Yjk4LTBhZGMwODEzY2IyNSoK";export{G as default};
