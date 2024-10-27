const B="data:text/markdown;base64,DQoNClRoaW5ncyBhcmUgZmluYWxseSBzdGFydGluZyB0byBnZXQgYmFjayB0byBub3JtYWwgaW4gMjAyMSwgc28gaGVyZSBhcmUNCnNvbWUgSGFsbG93ZWVuIGFjdGl2aXRpZXMgeW91IGNhbiBkbyB3aXRoIGZyaWVuZHMgYW5kIGZhbWlseSB0aGF0IHdpbGwNCnB1dCB5b3UgaW4gdGhlIEhhbGxvd2VlbiBzcGlyaXQhDQoNCioqMS4gQ2FydmUgUHVtcGtpbnMqKg0KDQogQ2FydmluZyBwdW1wa2lucyBpcyBhIGNsYXNzaWMgSGFsbG93ZWVuIGFjdGl2aXR5IHRoYXTigJlzIGFsd2F5cw0KIGV4Y2l0aW5nLCBmdW4gYW5kIGhhcyBhIHRlbmRlbmN5IHRvIG1ha2UgYSBtZXNzLiBJdCBsZXRzIHlvdSBnZXQNCiBjcmVhdGl2ZSB3aXRoIHlvdXIgcHVtcGtpbiBkZXNpZ25zLCBhbmQgdGhlIGV4cGVyaWVuY2UgZGVmaW5pdGVseQ0KIHdvbuKAmXQgZGlzYXBwb2ludCBpZiB5b3UgZGVjaWRlIHRvIHBhcnRpY2lwYXRlIGluIHRoZSBmZXN0aXZpdGllcyB0aGlzDQogeWVhci4NCg0KKioyLiBHb2luZyB0byBIYXVudGVkIEhvdXNlcyoqDQoNCiBJZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ2V0IGludG8gdGhlIHNwb29reSBzcGlyaXQgdGhpcyB5ZWFyLCBnb2luZyB0byBhDQogaGF1bnRlZCBob3VzZSBpcyBvbmUgb2YgdGhlIGJlc3Qgd2F5cyB0byBkbyBpdC4gRXZlbiBtYWtpbmcgeW91ciBvd24NCiBoYXVudGVkIGhvdXNlIGlzIGEgZ3JlYXQgaWRlYSEgUmVtZW1iZXIgdG8gbWFrZSBpdCBkYXJrLCBlZXJpZSBhbmQNCiBmdWxsIG9mIGNyZWVweSBnaG9zdHMgYW5kIGdob3VscyENCg0KKiozLiBEZWNvcmF0aW5nIGZvciBIYWxsb3dlZW4qKg0KDQogWW91IHdvbuKAmXQgZXZlciBoYXZlIG1vcmUgZnVuIGRlY29yYXRpbmcgZm9yIGFueSBvdGhlciBob2xpZGF5LCBldmVuDQogQ2hyaXN0bWFzLCB0aGFuIHlvdSB3aWxsIGZvciBIYWxsb3dlZW4uIFlvdSBjYW4gYWRkIGNhdXRpb24gdGFwZSwNCiBncmF2ZXMsIG15c3RlcmlvdXMgbGlnaHRzLCBjb2J3ZWJzIC0gYW5kIHRoZSBsaXN0IG5ldmVyIGVuZHMuIEFmdGVyDQogYWxsLCB0aGUgbW9yZSBlbGFib3JhdGUgeW91ciBob3VzZSBpcyBkZWNvcmF0ZWQsIHRoZSBtb3JlDQogdHJpY2stb3ItdHJlYXRlcnMgeW91J3JlIGxpa2VseSB0byBkcmF3IQ0KDQoqKjQuIE1ha2luZyB5b3VyIG93biBIYWxsb3dlZW4gY29zdHVtZSoqDQoNCiBIYWxsb3dlZW4gcmVhbGx5IGFsbG93cyB5b3UgdG8gZXhwcmVzcyB5b3Vyc2VsZiB0aHJvdWdoIHlvdXIgY29zdHVtZXMuDQogWW91IGNhbiBiZSBhbnlvbmUgb3IgYW55dGhpbmcgeW91IHdhbnQgdG8gYmUsIGFuZCBtYWtpbmcgeW91ciBjb3N0dW1lDQogeW91cnNlbGYganVzdCBtYWtlcyBpdCB0aGF0IG11Y2ggbW9yZSBwZXJzb25hbC4gWW91IGNhbiBmaW5kIGRpZmZlcmVudA0KIHBpZWNlcyBvZiBjbG90aGluZyBmcm9tIGEgdmFyaWV0eSBvZiBzdG9yZXMgYW5kIHB1dCB0aGVtIHRvZ2V0aGVyLCBvcg0KIHlvdSBjYW4gdHJ5IG1ha2luZyBldmVyeXRoaW5nIGJ5IHlvdXJzZWxmLiBUaGVyZSBpcyBubyBsaW1pdCB0byB5b3VyDQogY3JlYXRpdml0eSENCg0KKio1LiBUZWxsaW5nIFNjYXJ5IFN0b3JpZXMqKg0KDQogIFRoZSDigJh0cmVhdOKAmSBpbiB0aGUgc2F5aW5nIHRyaWNrLW9yLXRyZWF0IGlzIGFsd2F5cyBlbmpveWFibGUsIGJ1dCB0aGUNCiAg4oCYdHJpY2vigJkgY2FuIGJlIGVxdWFsbHkgYW11c2luZyBhcyB3ZWxsLiBUaGVyZSBpcyBub3RoaW5nIGJldHRlciB0aGFuDQogIHNjYXJpbmcgeW91ciBmcmllbmRzIG9uIEhhbGxvd2VlbiwgYW5kIHlvdSBjYW4gdGFrZSBpdCBvbmUgc3RlcA0KICBmdXJ0aGVyIGJ5IGNyZWF0aW5nIGEgc3RvcnkgdG8gbWFrZSB0aGUgc2NhcmUgbW9yZSBiZWxpZXZhYmxlLiBVc2UNCiAgcHJvcHMsIHBsYW4geW91ciBzdG9yaWVzIGFoZWFkIG9mIHRpbWUgYW5kIG1ha2Ugc3VyZSB5b3UgYnJpbmcgYQ0KICBjYW1lcmEsIGJlY2F1c2UgdGhlIGxvb2sgb24geW91ciBmcmllbmRz4oCZIGZhY2VzIHdoZW4gdGhleSBzY3JlYW0gd2lsbA0KICBiZSBhIG1vbWVudCB5b3Ugd29u4oCZdCB3YW50IHRvIGZvcmdldCENCg0KDQpNYWtlIHRoZSBtb3N0IG91dCBvZiB5b3VyIEhhbGxvd2VlbiB0aGlzIHllYXIgYnkgdHJ5aW5nIG91dCBhdCBsZWFzdA0Kb25lIG9mIHRoZXNlIGdyZWF0IEhhbGxvd2VlbiBhY3Rpdml0aWVzISBIYXZlIGEgSGFwcHkgSGFsbG93ZWVuIE1DSSENCg0KDQoqQ3JlYXRpdmUgQ29tbW9uczoNCmh0dHBzOi8vc2VhcmNoLmNyZWF0aXZlY29tbW9ucy5vcmcvcGhvdG9zL2ZkZDE4YmNmLTM0NDUtNDdhMi05Yjk4LTBhZGMwODEzY2IyNSoNCg==";export{B as default};
