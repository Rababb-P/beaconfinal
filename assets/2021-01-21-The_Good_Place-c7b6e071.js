const G="data:text/markdown;base64,DQoNCipUaGUgR29vZCBQbGFjZSogaXMgYSBOZXRmbGl4IHNlcmllcyB0aGF0IHJhbiBmcm9tIDIwMTggdG8gMjAyMC4gSXQNCnNwYW5uZWQgZm91ciBzZWFzb25zLCBhbmQgd2FzIGZhciBmcm9tIHlvdXIgdHlwaWNhbCBzaXRjb20uIE1lZXQgRWxlYW5vcg0KU2hlbGxzdHJvcCwgYSBzZWxmLWNlbnRyZWQsIHRlcnJpYmxlIGh1bWFuIGJlaW5nIHdobyBpcyBhY2NpZGVudGFsbHkNCnNlbnQgdG8gXCJUaGUgR29vZCBQbGFjZVwiLCBvciBIZWF2ZW4sIGFuZCBtdXN0IHRoZXJlZm9yZSBpbXByb3ZlDQpoZXJzZWxmIGluIG9yZGVyIHRvIHN0YXkgdGhlcmUuIE92ZXIgdGhlIGNvdXJzZSBvZiB0aGUgc2VyaWVzLCBzaGUNCmxlYXJucyBldGhpY3MgZnJvbSBhIHBoaWxvc29waHkgcHJvZmVzc29yIG5hbWVkIENoaWRpLCBiZWZyaWVuZHMgd2VhbHRoeQ0Kc29jaWFsaXRlIG5hbWVkIFRhaGFuaSwgbWVldHMgYSBtZW1iZXIgb2YgdGhlIGFsbC1wb3dlcmZ1bCByYWNlIG9mDQpKYW5ldHMsIGFuZCBhIG51bWJlciBvZiBvdGhlciBjcmF6eSBjaGFyYWN0ZXJzLg0KDQpXaGF0IG1ha2VzICpUaGUgR29vZCBQbGFjZSogZGlmZmVyZW50IGZyb20gYWxtb3N0IGFsbCB0aGUgb3RoZXIgc2hvd3MNCnRvZGF5IGlzIGl0cyByZWplY3Rpb24gb2YgdGhlIHNpdGNvbSBzdGF0dXMgcXVvLiBXaGlsZSBpdCBkb2VzIGZvY3VzIG9uDQp0aGUgd2Fja3kgaGlqaW5rcyBvZiB0aGUgbWFpbiBjaGFyYWN0ZXJzLCBpdCBpcyB1bmlxdWUgYmVjYXVzZSBpdCBwdXRzDQpjaGFyYWN0ZXIgZGV2ZWxvcG1lbnQgYXQgaXRzIGZvcmVmcm9udCwgYW5kIGNvbnN0YW50bHkgcmV3cml0ZXMgaXRzDQpwcmVtaXNlLg0KDQpUaGUgc2hvdyBkb2Vzbid0IHRydWx5IGNvbWUgaW50byBpdHMgb3duIHVudGlsIHRoZSBlbmQgb2Ygc2Vhc29uIDEgLQ0Kd2hpY2gsIHdpdGhvdXQgc3BvaWxpbmcgYW55dGhpbmcsIGNvbXBsZXRlbHkgY2hhbmdlcyB3aGF0IHlvdSB0aG91Z2h0DQp5b3Uga25ldyBhYm91dCB0aGUgY2hhcmFjdGVycy4gRnJvbSB0aGVyZSBpdCB0YWtlcyBvZmYsIGxlYW5pbmcgaW50byB0aGUNCmFic3VyZGl0eSBvZiBpdHMgcHJlbWlzZSAoZmVhdHVyaW5nIGEgc3RydWdnbGluZyBkZW1vbiBhY3RyZXNzIGFzIG9uZSBvZg0KaXRzIGhpZ2hsaWdodHMpLiBUaGlzIHNpdGNvbSBpcyBvbmUgb2YgdGhlIGZldyBzaG93cyB0aGF0IGhhcyBtYW5hZ2VkIHRvDQprZWVwIG1lIGNvbnNpc3RlbnRseSBndWVzc2luZyBhbmQgZW50ZXJ0YWluZWQsIHdpdGhvdXQgbG9zaW5nIHNpZ2h0IG9mDQppdHMgb3JpZ2luYWwgcHJlbWlzZS4NCg0KRm9yIGEgc2hvdyBhYm91dCBwaGlsb3NvcGh5LCAqVGhlIEdvb2QgUGxhY2UqIGRlYWxzIHdpdGggYSBudW1iZXIgb2YNCm1vcmFsIGFuZCBldGhpY2FsIGRpbGVtbWFzLiBTaG91bGQgZ29vZCBkZWVkcyBjb3VudCBpZiB0aGV5IGFyZSBmb3INCnNlbGZpc2ggcmVhc29ucz8gV2hhdCBkbyB3ZSBvd2UgZWFjaCBvdGhlcj8gSSBoYWQgbmV2ZXIgaGVhcmQgb2YNCnV0aWxpdGFyaWFuaXNtIG9yIG1vcmFsIHBhcnRpY3VsYXJpc20gYmVmb3JlLCBidXQgdGhlIHNob3cgbWFuYWdlcyB0bw0KbWFrZSB0aGUgbGVhcm5pbmcgb2YgcGhpbG9zb3BoeSBpbnRlZ3JhbCB0byB0aGUgcGxvdCAtIHdpdGhvdXQgYm9yaW5nDQppdHMgYXVkaWVuY2UuIEl0IGhlbHBzIHRoYXQgSmFzb24sIHRoZSB3YWxraW5nIGVtYm9kaW1lbnQgb2YgZXZlcnkNCkZsb3JpZGEgbWFuIHN0ZXJlb3R5cGUsIGlzIGFsd2F5cyB0aGVyZSB3aXRoIGEgc3RvcnkgYWJvdXQgaGlzIGRhbmNlDQpjcmV3LCBvciBhIGNyYXp5IGNyaW1lIGhlIGNvbW1pdHRlZCAtIG9yIHNvbWV0aW1lcyBldmVuIGJvdGgsIGFzIHdhcyB0aGUNCmNhc2Ugd2hlbiBoZSBmcmFtZWQgYSBnaXJsIG5hbWVkIFNoZWlsYSBmb3Igc3RlYWxpbmcgYm9vZ2llIGJvYXJkcyB0bw0Kc3RvcCB0aGUgYmVzdCBwb3AtYW5kLWxvY2tlciBvbiBoaXMgZGFuY2UgY3JldyBmcm9tIG1vdmluZyBhd2F5Lg0KDQpUaGUga2V5IHJlYXNvbiB0aGF0ICpUaGUgR29vZCBQbGFjZSogaGFzIGFwcGVhbGVkIHRvIHNvIG1hbnkgcGVvcGxlDQpkdXJpbmcgdGhlc2UgdGltZXMgaXMgYmVjYXVzZSBpdCBvZmZlcnMgYSBwb3NpdGl2ZSB2aWV3IG9uIGh1bWFuaXR5LiBPdXINCmlubm92YXRpb24sIHJlc2lsaWVuY2UsIGFuZCBkZXNpcmUgdG8gaW1wcm92ZSBvdXJzZWx2ZXMgYXJlIGF0IHRoZQ0KY2VudGVyIG9mIHRoZSBzaG93LCBhcyBFbGVhbm9yIChhbmQgdGhlIG90aGVycyBhcm91bmQgaGVyKSBiZWNvbWUgYmV0dGVyDQpwZW9wbGUuIFRoZXJlIGFyZSBtb3JlIHRoYW4gYSBmZXcgb2ZmaGFuZCByZW1hcmtzIGFuZCBqYWJzIGF0IG91cg0Kc29jaWV0eSB0b2RheSAtIHBhcnRpY3VsYXJseSB3aXRoIEJyZW50IGluIHNlYXNvbiA0LCB3aG8gLSBhcyB0aGUNCmVwaXRvbWUgb2YgdGhlIFwiZHVkZWJyb1wiIHN0ZXJlb3R5cGUgLSBpcyBjbGVhcmx5IGJhc2VkIG9uIFN1cHJlbWUNCkNvdXJ0IEp1c3RpY2UgQnJldHQgS2F2YW5hdWdoLCBhbmQgbWFuYWdlcyB0byBjb21lIGFjcm9zcyB3b3JzZSB0aGFuDQpzb21lIG9mIHRoZSAqZGVtb25zKiBvbiB0aGUgc2hvdy4NCg0KSG93ZXZlciwgYXQgdGhlIGVuZCBvZiB0aGUgZGF5LCB0aGUgbWVzc2FnZSBvZiB0aGUgc2hvdyBpcyBhIHBvc2l0aXZlDQpvbmUsIGFzIGVhY2ggb2YgdGhlIGNoYXJhY3RlcnMgb3ZlcmNvbWVzIHRoZWlyIGZsYXdzIGFuZCBiZWNvbWUgdGhlIGJlc3QNCnZlcnNpb24gb2YgdGhlbXNlbHZlcy4gV2hpbGUgdGhlIHNob3cgY29uZGVtbnMgdGhlIGh1bWFucyBmb3IgdGhlaXIgcGFzdA0KYWN0aW9ucywgaXQgcHJhaXNlcyB0aGVtIGZvciB0aGVpciBhYmlsaXR5IHRvIGltcHJvdmUgdGhlbXNlbHZlcywNCnNob3dpbmcgdGhlIHBvc2l0aXZlIGVmZmVjdCB0aGV5IGNhbiBoYXZlIG9uIHRoZSB3b3JsZCBhcm91bmQgdGhlbS4gSW4gYQ0KdGltZSB3aGVuIHNvIG1hbnkgcGVvcGxlIGhhdmUgcmVzb3J0ZWQgdG8gbmVnYXRpdml0eSBhbmQgcGVzc2ltaXNtLCBpdA0KaXMgdGhlIGxpdHRsZSBiaXQgb2YgcG9zaXRpdml0eSB5b3UgZGlkbid0IGtub3cgdGhhdCB5b3Ugd2VyZSBtaXNzaW5nLg0KDQpPdmVyIHRoZSBjb3Vyc2Ugb2YgdGhlIGZvdXIgc2Vhc29ucywgdGhlcmUgaXMgb25lIGxpbmUgdGhhdCBJIHRoaW5rDQpzdGFuZHMgb3V0IGFib3ZlIGFsbCBvdGhlcnMgYW5kIG5pY2VseSByZXByZXNlbnRzIHRoZSBtYWluIHRoZW1lIG9mIHRoZQ0Kc2hvdzogKiJXaGF0IG1hdHRlcnMgaXNuJ3QgaWYgcGVvcGxlIGFyZSBnb29kIG9yIGJhZDsgd2hhdCBtYXR0ZXJzIGlzIGlmDQp0aGV5J3JlIHRyeWluZyB0byBiZSBiZXR0ZXIgdG9kYXkgdGhhbiB0aGV5IHdlcmUgeWVzdGVyZGF5LiIqIFdlIHNob3VsZA0KYWxsIGFpbSB0byBiZSB0aGUgYmVzdCB2ZXJzaW9ucyBvZiBvdXJzZWx2ZXMsIGV2ZW4gd2hlbiBpdCdzIGhhcmQgYW5kDQp0aGVyZSBpcyBubyBvYnZpb3VzIHJld2FyZC4gKlRoZSBHb29kIFBsYWNlKiBoYXMgZG9uZSBleGVtcGxhcnkgd29yayBpbg0Kc2hvd2luZyBodW1hbml0eSBhdCBpdHMgaGlnaGVzdCBhbmQgbG93ZXN0LiBJdCBtYW5hZ2VzIHRvIGJlIG9wdGltaXN0aWMNCmFib3V0IG91ciBmdXR1cmUsIGV2ZW4gd2hlbiBpdCBmZWVscyBsaWtlIHRoZXJlIGlzbid0IG11Y2ggdG8gYmUNCm9wdGltaXN0aWMgYWJvdXQuIFRoaXMgaXMgd2h5ICpUaGUgR29vZCBQbGFjZSogaXMgdGhlIGtpbmQgb2Ygc2hvdyB3ZQ0KbmVlZCByaWdodCBub3cuDQoNClBob3RvIFNvdXJjZTogWypCZXR0ZXIgRGF5cyBBaGVhZCpdKGh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9CNUxHejkya2FBTSkgYnkgSWFuIFRheWxvciwgZnJvbSBVbnNwbGFzaC4NCg==";export{G as default};
