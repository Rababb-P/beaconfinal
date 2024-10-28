const G="data:text/markdown;base64,CkFzIHdlIHN0YXJ0IHRoZSBuZXcgc2VtZXN0ZXIsIEkgdGhpbmsgaXQncyB0aW1lIHRvIGV4YW1pbmUgb3VyCnByaW9yaXRpZXMsIHN0YXJ0aW5nIHdpdGggTUNJ4oCZcyBvd24gbWFzY290LCBNYXJ0eSB0aGUgQmVhci4gQXQgYmVzdCwgdGhlCmNvc3R1bWUgbG9va3MgbGlrZSBhIGtub2NrIG9mZiBvZiBhIFlvZ2kgYmVhciBzcGVjaWZpY2FsbHkgZGVzaWduZWQgdG8Kc2NhcmUgY2hpbGRyZW4uIEF0IHdvcnN0LCBpdCBsb29rcyBsaWtlIHNvbWVvbmUgc2tpbm5lZCBGcmVkZHkgRmF6YmVhcgpmcm9tIEZpdmUgTmlnaHRzIGF0IEZyZWRkaWVzIGFuZCBjYWxsZWQgaXQgYSBtYXNjb3QuIE1hc2NvdHMgYXJlIG5vdApqdXN0IGJlYWNvbnMgKGdldCBpdD8pIGZvciBzY2hvb2wgc3Bpcml0LCBidXQgc3ltYm9saXplIHRoZSBzY2hvb2wgYXMgYQp3aG9sZS4gWWV0LCBldmVuIHRoZSBzY2hvb2wgc2VlbXMgYXNoYW1lZCBvZiBNYXJ0eS4gV2hlbiBpcyB0aGUgbGFzdAp0aW1lIHlvdSByZW1lbWJlciB0aGVtIHVuY2FnaW5nIG91ciBmYXZvcml0ZSBiZWFyLXNoYXBlZCB0ZXJyb3I/IEkKYmVsaWV2ZSBpdCB0byBiZSB0aGUgcHJpbWUgdGltZSB0byByZXBsYWNlIE1hcnR5IGFuZCB0aHJvdWdoIGludGVuc2l2ZQpyZXNlYXJjaCwgSSBoYXZlIG5hcnJvd2VkIGRvd24gdGhlIGxpc3QgdG8gZm91ciBsdWNreSBjb250ZXN0YW50cy4KQWRtaXR0ZWRseSwgSSBoYXZlIG5ldmVyIGNvbXBldGVkIGluIG9yIGF0dGVuZGVkIGFueSBNQ0kgc3BvcnRzIG1hdGNoZXMsCmJ1dCBJIGRvbid0IHNlZSBob3cgdGhpcyBjb3VsZCBiZSBhIHByb2JsZW0uCgpBdmF0YXLigJlzIEFsaWVuIFJhY2U6IE5h4oCZdmkKCkkgaGF2ZSBub3RpY2VkIGEgdGltZSBob25vcmVkIHRyYWRpdGlvbiBvZiBtb2RlbGluZyBzcG9ydHMgdGVhbSBtYXNjb3RzCmFmdGVyIGluc3RhbnRseSByZWNvZ25pemFibGUgZmlndXJlcyBmcm9tIGhpc3RvcnksIHN1Y2ggYW4gZXhhbXBsZSBiZWluZwp0aGUgTWljaGFlbCBQb3dlciBUcm9qYW5zLiBNYXJ0eSB0aGUgQmVhciBsYWNrcyB0aGUgY3VsdHVyYWwgcmVsZXZhbmNlCm9mIGhpc3RvcmljYWwgZmlndXJlcyB0aGF0IHRoZSBUcm9qYW4gbWFzY290IGhhcy4gU28sIGluIHNlYXJjaCBvZiB0aGlzCmN1bHR1cmFsIHJlbGV2YW5jZSwgSSBzdWdnZXN0IHdlIGF0IE1hcnRpbmdyb3ZlIGZvbGxvdyB0aGlzIHRyYWRpdGlvbiwKYnV0IHRha2UgaXQgYSBzdGVwIGZ1cnRoZXIgYnkgbG9va2luZyBpbnRvIHRoZSBmdXR1cmUuIEkgc2F5IHdlIGhhcm5lc3MKdW5kZW5pYWJsZSBjdWx0dXJhbCByZWxldmFuY2UgYW5kIG1vZGVsIG91ciBtYXNjb3Qgb2ZmIG9mIHRoZSBOYeKAmXZpLCB0aGUKYWxpZW4gcmFjZSBpbiB0aGUgaGl0IGZyYW5jaGlzZSBBdmF0YXIuCgpLaWVmZXIgU3V0aGVybGFuZAoKTWFueSBoaWdoIHNjaG9vbHMgaGF2ZSBmb3VuZCBzdWNjZXNzIHdpdGggaGF2aW5nIGEgY3V0ZSBhbmQgZnJpZW5kbHkKbG9va2luZyBtYXNjb3Qgc3VjaCBhcyB0aGUgUnVubnltZWRlIFJhdmVuLiBNYXJ0eSBpcyBhIGdvb2QgYXR0ZW1wdCB0bwpmaXQgaW4gd2l0aCB0aGlzIHRyZW5kLiBIb3dldmVyLCB3ZSBuZWVkIHRvIHN0YW5kIG91dCwgd2UgbmVlZCB0byBtYWtlCm91ciBtYXJrIG9uIHRoZSBtYXNjb3Qgd29ybGQuIEhvdyBkbyB3ZSBkbyB0aGF0PyBXZSBjaG9vc2UgdGhlIGN1dGVzdCwKZnJpZW5kbGllc3QgYW5pbWFsIENhbmFkYSBoYXMgdG8gb2ZmZXI6IGZhbW91cyBhY3RvciBhbmQgbm90YWJsZQpNYXJ0aW5ncm92ZSBhbHVtbmkgS2llZmVyIFN1dGhlcmxhbmQuIEhlIHJhZGlhdGVzIGZyaWVuZGxpbmVzcyBhbmQKYXBwcm9hY2hhYmlsaXR5IGluIGhpcyByb2xlcyBhcyB0aGUgYnVsbHkgaW4gU3RhbmQgQnkgTWUsIHRoZQpibG9vZHRoaXJzdHkga2lsbGVyIGluIEZyZWV3YXkgYW5kIGFzIHRoZSBsaXRlcmFsIGJsb29kdGhpcnN0eSB2YW1waXJlCmluIHRoZSBMb3N0IEJveXMuIEknbSBzdXJlIHRoYXQgYSBmZWx0IGVmZmlneSBvZiBoaW0gd2lsbCBjZXJ0YWlubHkKY2FwdHVyZSB0aGUgY3V0ZSBpbm5vY2VuY2Ugb2YgaGlzIHJvbGVzIGFzIHRoZSBhc3Nhc3NpbiBpbiBEZXNlcnQKU2FpbnRzIGFuZCBhcyB0aGUgYXNzYXNzaW4gaW4gQ29uZmVzc2lvbi4gSWYgd2UgY2FwdHVyZSBhIGZyYWN0aW9uIG9mCmhpcyBnZW50bGUgYW5kIG5vbi1pbnRpbWlkYXRpbmcgYXVyYSwgdGhpcyBtYXNjb3Qgd2lsbCBkZWZpbml0ZWx5IGJlIG9uZQp0aGF0IHN0dWRlbnRzIHdpbGwgd2FudCB0byBpbnRyb2R1Y2UgdG8gdGhlaXIgeW91bmdlciBzaWJsaW5ncy4KPGJyPjxicj4KVGhlIEV4aXN0ZW50aWFsIFRlcnJvciBvZiBHbG9iYWwgV2FybWluZwo8YnI+PGJyPgpNYXNjb3RzIGFyZSBhIGdyZWF0IHNlY3JldCB3ZWFwb24gaW4gc3BvcnRzLiBNYW55IHRlYW1zIGxpa2UgdGhlCk9ha3ZpbGxlIFRyYWZhbGdhciBEZXZpbCBoYXZlIGNob3NlbiB0byB0YWtlIGluc3BpcmF0aW9uIGZyb20KZnJpZ2h0ZW5pbmcgcmVsaWdpb3VzIGZpZ3VyZXMgYW5kIGluY29ycG9yYXRlIHRoZW0gaW50byB0aGVpciBtYXNjb3RzLgpUaGlzIGlzLCBvZiBjb3Vyc2UsIGEgZ3JlYXQgc2NhcmUgdGFjdGlj4oCmIHdobyB3b3VsZG7igJl0IGJlIGFmcmFpZCBvZiBhCnRlYW0gdGhhdCBiZXN0ZWQgYSBkZXZpbCB0aGF0IHBhcmFkZWQgYXJvdW5kIHRoZWlyIGVuZW1pZXMsIGZvcmNpbmcgaXQKdG8gZGFuY2UgdG8gVG9kYXkncyBUb3AgNDAgYmVmb3JlIGdhbWVzPyBNYXJ0aW5ncm92ZSB3aWxsIG1vc3QKZGVmaW5pdGVseSBzZWUgYW4gaW5mbHV4IG9mIHN1Y2Nlc3NmdWwgaG9tZS1nYW1lcyBpZiB3ZSBoYXJuZXNzIHRoZQpmcmlnaHRlbmluZyBwb3dlciBvZiBtYXNjb3RzIGJ5IGNob29zaW5nIHRvIGluc3RpbGwgYSBkZWVwIGZlYXIgaW4gdGhlCmhlYXJ0IG9mIGV2ZXJ5IHNwb3J0cyB0ZWFtIHdlIHBsYXkgYWdhaW5zdCBpbiB0aGUgZnV0dXJlLiBXaGF0IGNvdWxkIGRvCnRoaXMgYmV0dGVyIHRoYW4gZXhpc3RlbnRpYWwgdGVycm9yIGFib3V0IHRoZSBmdXR1cmUgcHJvbWlzZWQgYnkgZ2xvYmFsCndhcm1pbmc/IEhvdyB3aWxsIHdlIHBvcnRyYXkgdGhlIGNvbmNlcHQgb2YgZ2xvYmFsIHdhcm1pbmc/IFdlbGwsIHRoYXQncwpvdXQgb2YgbXkgZGVwYXJ0bWVudCEgSG93ZXZlciwgSSBob3BlIHRoZSBjb3N0dW1lIHdpbGwgcmVmZXJlbmNlIERvdWcKRm9yZCBnZXR0aW5nIHJpZCBvZiB0aGUgY2FyYm9uIHRheCBpbiBPbnRhcmlvLgo8YnI+PGJyPgpNYXJ0eSBBZ2Fpbgo8YnI+PGJyPgpBcyBJIGNhbWUgdXAgd2l0aCBpZGVhcyBhbmQgcmV2aWV3ZWQgbWFzY290cywgSSBjYW1lIHRvIGFuIGVwaXBoYW55LiBJCnJlYWxpemVkIHdoeSB3ZSBoYXZlIG1hc2NvdHMgaW4gdGhlIGZpcnN0IHBsYWNlLiBJdCBpc27igJl0IGFib3V0IGhhdmluZwp0aGUgY3V0ZXN0IG9yIG1vc3QgbWVtb3JhYmxlIG9yIHNjYXJpZXN0IG1hc2NvdC4gSXQncyBhYm91dCBoYXZpbmcgYQpjb25uZWN0aW9uIHdpdGggdGhlIHNjaG9vbC4gTWFydHkgbWF5IGJlIGEgbGl0dGxlIHdvcnNlIGZvciB3ZWFyIGFuZCBJJ20Kbm90IHN1cmUgaWYgSSBoYXZlIGV2ZXIgc2VlbiBoaW0gYWN0dWFsbHkg4oCcaW4gdGhlIGZlbHTigJ0gYmVmb3JlIGJ1dCwgaGUKZG9lc27igJl0IG5lZWQgdG8gYXBwZWFyIGFsbCB0aGUgdGltZSBmb3IgaGlzIHByZXNlbmNlIHRvIGJlIGZlbHQuIEhlIGlzCmluIHRoZSBCQUPigJlzIHllYXJseSDigJxiZWFyIGNyYXds4oCdLCBoZSBpcyBpbiB0aGUgc2lnbiBhYm92ZSB0aGUgdGVjaApoYWxsd2F5IHRoYXQgc2F5cyDigJhIb21lIG9mIHRoZSBCZWFyc+KAmSwgYnV0LCBtb3N0IGltcG9ydGFudGx5LCBoZSBpcyBpbgpldmVyeSBNYXJ0aW5ncm92ZSBzdHVkZW504oCZcyBoZWFydC4K";export{G as default};
