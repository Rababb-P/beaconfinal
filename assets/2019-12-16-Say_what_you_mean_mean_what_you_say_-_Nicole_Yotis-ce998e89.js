const G="data:text/markdown;base64,DQpJZiB5b3UncmUgbm90IGFscmVhZHkgYXdhcmUsIHdlIGFyZSBsaXZpbmcgaW4gYW4gYWdlIHdoZXJlIGV2ZXJ5dGhpbmcgaXMNCmF2YWlsYWJsZSBhdCBvdXIgZmluZ2VydGlwcy4gTmV3cywgZW50ZXJ0YWlubWVudCwgbXVzaWMsIGV0Yy4gLSB3aXRoDQpqdXN0IHRoZSBwdXNoIG9mIGEgYnV0dG9uIGl0J3MgYWxsIHRoZXJlLiBIb3dldmVyLCB3aXRoIHRoaXMgbmV3Zm91bmQNCmZyZWVkb20gY29tZXMgYSBwcmljZSB0aGF0IEknbSBzdXJlIHlvdSdyZSBhbHJlYWR5IGF3YXJlIG9mLiBXaGF0IHdlIHNheQ0Kb25saW5lIGlzIHVzdWFsbHkgZGlmZmVyZW50LCBzb21ldGltZXMgdG8gYW4gZXh0cmVtZSwgdGhhbiB3aGF0IHdlIHNheQ0KaW4gcmVhbCBsaWZlLiBNb3N0IG9mIHRoZSB3YXJuaW5ncyB0aGF0IHdlIGhlYXIgYWJvdXQgb25saW5lIHNhZmV0eQ0KaW5jbHVkZSBuZXZlciBnaXZpbmcgYXdheSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLCBvciBiZWluZyBtaW5kZnVsIG9mDQp3aGF0IGl0IGlzIHlvdSdyZSBzYXlpbmcuIEJ1dCB3aGF0IHdlIGRvbid0IGhlYXIgYWJvdXQgYXMgb2Z0ZW4gaXMgaG93DQp5b3VyIHBlcnNvbmFsaXR5IGl0c2VsZiBjYW4gY2hhbmdlLsKgDQoNCkxldCdzIHNheSB0aGF0IHlvdSdyZSBvbiBhbiBhcHAgdGhhdCBjb25uZWN0cyB5b3UgdG8gb3RoZXIgcGVvcGxlICh5b3VyDQpmcmllbmRzLCBmYW1pbHksIGV2ZW4gc3RyYW5nZXJzKSwgYW5kIHlvdSBzdWRkZW5seSBzZWUgc29tZXRoaW5nIHRoYXQNCmludGVyZXN0cyB5b3UuIEltbWVkaWF0ZWx5IHlvdSBmZWVsIHRoZSBuZWVkIHRvIGNvbW1lbnQgc29tZXRoaW5nLCByaWdodA0KdGhlbi4gVGhlIHdvcmxkIG11c3Qga25vdyBhYm91dCB3aGF0IHlvdSBoYXZlIHRvIHNheS4gU28sIHlvdSB0eXBlIGENCnF1aWNrIGNvbW1lbnQuIFNvb24sIHlvdSBnZXQgYSByZXBseSBhbmQgYXJlIHN1ZGRlbmx5IGhhdmluZyBhDQpjb252ZXJzYXRpb24gb24gYSB0b3BpYyB0aGF0IHlvdSwgaW4gZmFjdCwgZG9uJ3QgcmVhbGx5IGtub3cgbXVjaCBhYm91dC4NClNvIHdoYXQgZG8geW91IGRvPyBLZWVwIGhhdmluZyB0aGUgY29udmVyc2F0aW9uPyBJdCBzZWVtcyBhcyB0aG91Z2gNCnRoZXJlJ3Mgbm8gb3RoZXIgY2hvaWNlLiBZb3UgY2FuJ3QganVzdCBsb2cgb2ZmIGFuZCBsZWF2ZSBwZW9wbGUNCmhhbmdpbmcuIFNvIHlvdSBrZWVwIHRhbGtpbmcsIHRoaW5raW5nIGl0IGRvZXNuJ3QgbWF0dGVyLiBXaG8gY2FyZXMgaWYNCnlvdSdyZSB3cm9uZz8NCg0KVGhpcyB2ZXJ5IHdlbGwgbWlnaHQgbm90IGJlIHlvdS4gQnV0IHRoZSB0cnV0aCBpcywgc29tZSBwZW9wbGUganVzdCBmZWVsDQp0aGUgbmVlZCB0byB0YWxrLCBzbywga25vd2luZyB0aGF0IHRoZXknbGwgbmV2ZXIgYWN0dWFsbHkgbWVldCB0aGUNCnBlcnNvbiB0aGV5J3JlIHRhbGtpbmcgdG8gYW5kIGtub3dpbmcgdGhleSdyZSBub3QgZ29pbmcgdG8gaGF2ZSB0bw0KYWN0dWFsbHkgZmFjZSB0aGUgY29uc2VxdWVuY2VzIG9mIGdpdmluZyBzYWlkIHBlcnNvbiBtaXNpbmZvcm1hdGlvbiwNCnRoZXkganVzdCBrZWVwIGdvaW5nLiBUaGlzIGlzIHJlYWxseSBzb21ldGhpbmcgeW91IG5lZWQgdG8gYmUgd2F0Y2hmdWwNCm9mLiBUZWxsaW5nIG90aGVyIHBlb3BsZSBzb21ldGhpbmcgdGhhdCBpc24ndCB0cnVlIGFuZCBwcmVzZW50aW5nIGl0IGFzDQpmYWN0IGNhbiBtaXNsZWFkIGxvdHMgb2YgcGVvcGxlLCBhbmQgY2FuIGFsc28gaGFybSB5b3VyIHJlcHV0YXRpb24uDQoNCk9yIG1heWJlLCBpbnN0ZWFkIG9mIHRhbGtpbmcgb2ZmIHRoZSB0b3Agb2YgeW91ciBoZWFkLCB5b3Ugc3BlYWsgaW4NCmV4dHJlbWVzLiBZb3UgbWlnaHQgc2F5IHRoYXQgeW91IGhhdGUgc29tZXRoaW5nIHRoYXQgeW91IHNlZSwgYnV0IHJlYWxseQ0KanVzdCBtaWxkbHkgZGlzbGlrZSBpdC4gT3IgcGVyaGFwcyB5b3Ugc2VlIHNvbWV0aGluZyB0aGF0IG1ha2VzIHlvdQ0KY2h1Y2tsZSBhIGJpdCwgYW5kIHRoZW4gc2F5IHRoYXQgaXQgd2FzIHNvIGZ1bm55IHRoYXQgeW91IHdlcmUgZHlpbmcgb2YNCmxhdWdodGVyLsKgDQoNCkV4YWdnZXJhdGluZyBpcyBhbiBlYXN5IHRoaW5nIHRvIGRvIG9uIHRoZSBpbnRlcm5ldC4gWW91IHdhbnQgcGVvcGxlIHRvDQpsaWtlIHdoYXQgeW91IHNheSwgdG8gYWdyZWUgd2l0aCB5b3UuIFNvIGluc3RlYWQgb2YgZ2l2aW5nIGFuIGhvbmVzdA0KcmVwbHksIHlvdSB0dXJuIHlvdXIgY29tbWVudCBpbnRvIHNvbWV0aGluZyBpdCdzIG5vdCwgc29sZWx5IGZvciB0aGUNCnNha2Ugb2YgbWFraW5nIG1vcmUgcGVvcGxlIGFncmVlIHdpdGggeW91LiBUaGlzIGlzbid0IGEgcmVhbGx5IHRlcnJpYmxlDQp0aGluZywgYnV0IHRyeSB0byBrZWVwIGl0IHJlYWwuIFdoaWxlIGl0J3Mgb2theSB0byBleGFnZ2VyYXRlIGEgYml0LCB5b3UNCm1pZ2h0IGVuZCB1cCBoYXZpbmcgYSByZWFsIGNvbnZlcnNhdGlvbiB3aGVuIHlvdSBkaWFsIGl0IGRvd24gYSBmZXcNCm5vdGNoZXMgdG9vLg0KDQpUaGUgbGFzdCB0aGluZyBwZW9wbGUgZG8gb25saW5lIGlzIGJlIGNvbXBsZXRlbHkgc2lsZW50LiBOb3cgdGhpcyBtYXkNCm5vdCBzb3VuZCBhcyBiYWQsIGFuZCBpdCBpc24ndCBhIGJpZyBwcm9ibGVtLCBlc3BlY2lhbGx5IGNvbXBhcmVkIHRvIHRoZQ0Kb3RoZXIgdGhpbmdzIEkndmUgYmVlbiB3cml0aW5nIGFib3V0LiBCdXQgeW91IGRvIGhhdmUgc29jaWFsIG1lZGlhIHRvDQpiZSwgd2VsbCwgc29jaWFsLiBEb24ndCBiZSBzbyBhZnJhaWQgdG8gc2F5IHNvbWV0aGluZyB0aGF0IGl0IGtlZXBzIHlvdQ0KZnJvbSBzYXlpbmcgYW55dGhpbmcgZW50aXJlbHkuIEEgZ29vZCB0aGluZyB0byBrZWVwIGluIG1pbmQgd2hlbg0KaW50ZXJhY3Rpbmcgd2l0aCBvdGhlcnMgb24gdGhlIGludGVybmV0IGlzIHRvIHNheSBzb21ldGhpbmcgcG9zaXRpdmUsIGFzDQpvcHBvc2VkIHRvIG5lZ2F0aXZlLiBBbmQgaWYgc29tZW9uZSBzYXlzIHNvbWV0aGluZyBuZWdhdGl2ZSB0byB5b3UsIHRyeQ0KdG8gYmUgbWF0dXJlLiBZb3UgZG9uJ3QgaGF2ZSB0byByZXBseSwgYnV0IGlmIHlvdSBkbywgbWFrZSBzdXJlIHRoYXQgeW91DQphcmVuJ3QgYmVpbmcgcnVkZSBvciBpbXBvbGl0ZS4gVGhlIGJlc3QgdGhpbmcgdG8gZG8gaXMganVzdCBsZXQgaXQgZ28uDQpZb3UgZGlkbid0IGRvIGFueXRoaW5nIHdyb25nLCB0aGUgb3RoZXIgcGVyc29uIGRpZCwgc28gZG9uJ3QgbGV0IHRoZW0NCmJvdGhlciB5b3UuDQoNCkFsbCBpbiBhbGwsIGp1c3QgcGF5IGF0dGVudGlvbiB0byB3aGF0IGV4YWN0bHkgaXQgaXMgdGhhdCB5b3UncmUgc2F5aW5nDQpvbmxpbmUuIEl0J3MgcXVpdGUgZWFzeSB0byBtaXNpbnRlcnByZXQgd2hhdCBhbnlvbmUgY291bGQgc2F5IHdoZW4gaXQncw0Kd3JpdHRlbiBkb3duLCBhcyB5b3UgZG9uJ3QgaGF2ZSBmYWNpYWwgZXhwcmVzc2lvbnMgb3IgZW1waGFzaXMgdG8gZ3VpZGUNCnlvdS4gU28gYmUgY2FyZWZ1bCwgYW5kIHRyeSB0byBhc3N1bWUgdGhlIGJlc3QuIFlvdSBjYXRjaCBtb3JlIGZsaWVzDQp3aXRoIGhvbmV5IHRoYW4gdmluZWdhci4NCmVnYXIuDQouDQplZ2FyLg0K";export{G as default};
