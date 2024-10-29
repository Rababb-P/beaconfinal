const G="data:text/markdown;base64,CgpGcm9tIGFuIGlkZWFsaXN0IGtub3duIGZvciBoaXMgYXR0ZW1wdHMgYXQgbGF5aW5nIHRoZSBmb3VuZGF0aW9uIGZvcgpodW1hbiBtaWdyYXRpb24gdG8gYSBkaWZmZXJlbnQgcGxhbmV0LCBFbG9uIE11c2sgaGFzIHJlY2VudGx5IGhhZCBhCmRpZmZpY3VsdCBmYWxsIGZyb20gZ3JhY2UuCjxicj48YnI+Ck11c2sgb2J0YWluZWQgb3duZXJzaGlwIG9mIFR3aXR0ZXIgaW4gYW4gYWxsLWNhc2ggYWNxdWlzaXRpb24gYnV5b3V0IG9uCkFwcmlsIDE0dGgsIDIwMjIsIHB1cmNoYXNlZCBmb3IgYSB3aG9vcGluZyA0NCBiaWxsaW9uIGRvbGxhcnMuIEhvd2V2ZXIsCnNpbmNlIHRoZW4sIGhlIGhhcyBiZWVuIHRpZWQgdXAgaW4gY29udHJvdmVyc3kgYWZ0ZXIgY29udHJvdmVyc3kuCjxicj48YnI+ClRha2UgdGhlIGluY2lkZW50IHdoZXJlIE11c2sgdHdlZXRlZCBhIGxpbmsgdG8gYW4gYXJ0aWNsZSBieSBhIG5ld3NwYXBlcgpjb21wYW55IGtub3duIGZvciBzcHJlYWRpbmcgZmFsc2UgaW5mb3JtYXRpb24sIHdoaWNoIGRldGFpbGVkCm9ic2Nlbml0aWVzIHJlZ2FyZGluZyBBbWVyaWNhbiBidXNpbmVzc21hbiBQYXVsIFBlbG9zaSwgdGhlIHNwb3VzZSBvZgp0aGUgZm9ybWVyIENhbGlmb3JuaWEgc3RhdGUgcmVwcmVzZW50YXRpdmUsIE5hbmN5IFBlbG9zaS4gVGhlIGRheQpiZWZvcmUsIFBlbG9zaSBoYWQgYmVlbiBoaXQgaW4gdGhlIGhlYWQgd2l0aCBhIGhhbW1lciBpbiBhIHRhcmdldGVkCmFzc2F1bHQsIHNwYXJraW5nIG91dHJhZ2UuIEFzIG9mIHRoZSB0aW1lIG9mIHdyaXRpbmcsIE11c2sgZGVsZXRlZCB0aGUKdHdlZXQsIGJ1dCBoYXMgbm90IGdpdmVuIGFueSBzdGF0ZW1lbnRzIGluIHJlZ2FyZHMgdG8gaGlzIGluc2Vuc2l0aXZlCmFjdGlvbnMuCjxicj48YnI+Ck11c2vigJlzIHBvcHVsYXJpdHkgaGFzIHNreXJvY2tldGVkIGluIHRoZSBwYXN0IGZldyB5ZWFycywgZXNwZWNpYWxseQphZnRlciBoZSB3YXMgdGl0bGVkIHRoZSByaWNoZXN0IG1hbiBpbiB0aGUgd29ybGQsIHlldCBpdCBzZWVtcyBhcyB0aG91Z2gKTXVzayBpcyBydW5uaW5nIG91dCBvZiBsdWNrIGFzIGhlIGxvc3QgdGhlIHRpdGxlIG9mIHdvcmxkJ3MgcmljaGVzdCBtYW4KdG8gYSBGcmVuY2ggYmlsbGlvbmFpcmUsIEJlcm5hcmQgQXJuYXVsdC4KPGJyPjxicj4KVG8gdG9wIGFsbCBvZiB0aGlzIG9mZiwgRWxvbiBNdXNrIHdhcyBkdWUgdG8gYXBwZWFyIGF0IHRoZSBVbml0ZWQgU3RhdGVzCkZlZGVyYWwgQ291cnQgaW4gU2FuIEZyYW5jaXNjbyBvbiBKYW51YXJ5IDE5dGgsIGFmdGVyIGhlIHdhcyBzdWVkIGJ5ClRlc2xhIHNoYXJlaG9sZGVycyBmb3IgYSBzZXJpZXMgb2YgdHdlZXRzIGluIDIwMTguIFRoZSBjbGFzcy1hY3Rpb24KbGF3c3VpdCB3YXMgZmlsZWQgb24gYmVoYWxmIG9mIFRlc2xhIGludmVzdG9ycyB3aG8gb3duZWQgVGVzbGEgc3RvY2sgZm9yCmEgMTAtZGF5IHBlcmlvZCBpbiBBdWd1c3Qgb2YgMjAxOC4gT24gdGhlIDd0aCBvZiBBdWd1c3QsIDIwMTgsIE11c2sgaGFkCnR3ZWV0ZWQgaGUgaGFkIGFjcXVpcmVkIHRoZSBmdW5kaW5nIG5lZWRlZCB0byBidXlvdXQgVGVzbGEgYXQgNzIgbWlsbGlvbgpkb2xsYXJzLCBidXQgdGhpcyBjbGFpbSBuZXZlciBtYXRlcmlhbGl6ZWQuIEFkZGl0aW9uYWxseSwgdGhlIGJhc2lzIG9mCnRoaXMgbGF3c3VpdCBkZXJpdmVzIGZyb20gdGhlIGNsYWltIHRoYXQgdGhlIFRlc2xhIHNoYXJlcyB3b3VsZCBub3QgaGF2ZQpiZWVuIHRyYWRlZCBhdCBzdWNoIGEgd2lkZSByYW5nZSBoYWQgTXVzayBub3QgdHdlZXRlZCBoaXMgaW50ZW50IHRvCnB1cmNoYXNlIHRoZSBjb21wYW55IGZvciA0MjAgZG9sbGFycyBwZXIgc2hhcmUsIHRodXMgY29zdGluZyBpbnZlc3RvcnMKbWlsbGlvbnMuIEFsbCB0aGlzIHByb21wdGVkIGFuIGludmVzdGlnYXRpb24sIHdoaWNoIHJlc3VsdGVkIGluIGEgMjAKbWlsbGlvbiBkb2xsYXIgZmluZSBmb3IgTXVzayBhbmQgZm9yIFRlc2xhOyBNdXNrIHdhcyBhbHNvIGZvcmNlZCB0bwpyZXNpZ24gYXMgVGVzbGEncyBjaGFpcm1hbi4KPGJyPjxicj4KQWxsIG9mIHRoZXNlIGlzc3VlcyBjb21lIGF0IGEgZGlmZmljdWx0IHRpbWUgZm9yIFR3aXR0ZXIsIGFzIHVzZXJzIGFyZQpjb25jZXJuZWQgYWJvdXQgd2hhdCB3aWxsIGJlY29tZSBvZiB0aGUgY29tcGFueSBmb2xsb3dpbmcgc3VjaCBhCmRyYW1hdGljIGNoYW5nZSBpbiBvd25lcnNoaXAuIE11c2sgcHVyY2hhc2VkIHRoZSBjb21wYW55IHdpdGggdGhlCmludGVudGlvbiBvZiBpbXBvc2luZyBsb29zZXIgcmVzdHJpY3Rpb25zIG9uIHVzZXJzLCB3aGljaCBpbmNsdWRlcwp1bmJhbm5pbmcgRm9ybWVyIFByZXNpZGVudCBEb25hbGQgVHJ1bXAsIHdobyB3YXMgcHJldmlvdXNseSBiYXJyZWQgZnJvbQp0aGUgcGxhdGZvcm0gZm9sbG93aW5nIHRoZSBzdG9ybWluZyBvZiB0aGUgVW5pdGVkIFN0YXRlcyBjYXBpdGFsIG9uCkphbnVhcnkgNnRoLCAyMDIyLgo8YnI+PGJyPgpBbGwgb2YgdGhpcyBpcyBiYWQgbmV3cyBmb3IgRWxvbiBNdXNrLCB5ZXQgTXVzayBpcyByZWZ1c2luZyB0byBsZXQgdGhpcwpnbzsgaGlzIG1vc3QgYXJkZW50IHN1cHBvcnRlcnMsIGluY2x1ZGluZyBteXNlbGYsIGFyZSBkaXNzYXRpc2ZpZWQgd2l0aApoaXMgbGFjayBvZiByZXNwb25zaWJpbGl0eS4gSGF2aW5nIHJlYWQgaGlzIGJpb2dyYXBoeSwgSSBmb3VuZCBpdAppbnRlcmVzdGluZyBhbmQgYW0gaW5zcGlyZWQgYnkgaGlzIHdpbGxpbmduZXNzIHRvIHRha2Ugcmlza3MgYW5kCmNoYWxsZW5nZSB0aGUgc3RhdHVzIHF1byBhbGwgdGhlIHdoaWxlIGJlaW5nIGFuIGVudHJlcHJlbmV1ci4KPGJyPjxicj4KQXMgSSBub3cgcmVmbGVjdCBvbiBNdXNr4oCZcyByZWNlbnQgYWN0aW9ucywgSSBjYW4gbm90IGhlbHAgYnV0IHN0aWxsCmFwcHJlY2lhdGUgYWxsIHRoZSB0cmlhbHMgYW5kIHRyaWJ1bGF0aW9ucyBoZSB3ZW50IHRocm91Z2ggYW5kIHRoZSBmYWN0CnRoYXQgaGUgc3RpbGwgbWFuYWdlZCB0byBhY2NvbXBsaXNoIG1hbnkgZmVhdHMgdGhhdCBvdGhlcnMgd291bGQgbm90CnRha2Ugb24uIFRoaXMgZW50YWlscyBQYXlwYWwsIGZvcm1lcmx5IGtub3duIGFzIFguY29tLCBUZXNsYSwgYW5kClNwYWNlWCwgYXMgd2VsbCBhcyBoaXMgZG9uYXRpb24gb2Ygb3ZlciAzMDAgbWlsbGlvbiBkb2xsYXJzIHRocm91Z2ggdGhlCk11c2sgRm91bmRhdGlvbiwgd2hpY2ggaXMga25vd24gZm9yIGRvbmF0aW5nIHRvIGNhdXNlcyBzdWNoIGFzIHJlbmV3YWJsZQplbmVyZ3ksIGh1bWFuIHNwYWNlIGV4cGxvcmF0aW9uIGFuZCBwZWRpYXRyaWMgcmVzZWFyY2guIEJ1dCBub3RoaW5nIHN1bXMKdXAgdGhpcyBzaXR1YXRpb24gYmV0dGVyIHRoYW4gYSBxdW90ZSBmcm9tIHRoZSBtYW4gaGltc2VsZiwgIkknbSBqdXN0CnRyeWluZyB0byB0aGluayBhYm91dCB0aGUgZnV0dXJlIGFuZCBub3QgYmUgc2FkLuKAnQo=";export{G as default};
