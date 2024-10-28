const G="data:text/markdown;base64,77u/KipMZWFkZXJzaGlwIGNhbXA/IFdlIGxvdmUgbGVhZGVyc2hpcCBjYW1wISoqCgpgCWBUaGlzIG1vbnRoLCBHcmFkZSAxMCBzdHVkZW50cyB3ZW50IHRvIENhbXAgTWFuaXRvdSB1cCBpbiBQYXJyeSBTb3VuZCBmb3IgTGVhZGVyc2hpcCBDYW1wIDIwMjMuIFRoZXkgd2VyZSBhY2NvbXBhbmllZCBieSBzZXZlcmFsIHRlYWNoZXJzLCBzdGFmZiwgYW5kIEdyYWRlIDExIGFuZCAxMiBzdHVkZW50cyByZXR1cm5pbmcgYXMgQWN0aXZpdHkgTGVhZGVycywgQ291bnNlbG9ycywgYW5kIEJMVOKAmXMgKEJlYXJzIExlYWRlcnNoaXAgVGVhbSkuIENhbXBlcnMgbGVmdCBzY2hvb2wgZWFybHkgaW4gdGhlIG1vcm5pbmcgb24gT2N0b2JlciAybmQsIGFuZCAoYmVncnVkZ2luZ2x5KSBkZXBhcnRlZCBmcm9tIGNhbXAgYWZ0ZXIgZWF0aW5nIGx1bmNoIG9uIE9jdG9iZXIgNXRoLgoKYAlgQ2FtcGVycyB3ZXJlIGVuZ2FnZWQgaW4gbnVtZXJvdXMgYWN0aXZpdGllcyBlYWNoIGRheSwgc3VjaCBhcyBPdXRkb29yIFN1cnZpdmFsIChpbmNsdWRpbmcgc2hlbHRlciBidWlsZGluZyBhbmQgYXJjaGVyeSksIENhbXAgUm9jaywgRmllbGQgR2FtZXMsIERhbmNlLCBHcm91cCBSZWMgKGluY2x1ZGluZyBzcG9ydHMsIHlvZ2EsIGFuZCBtaW5kZnVsbmVzcyksIFJvY2tzICYgUm9wZXMsIEhpa2luZyAmIEdlb2NhY2hpbmcsIERyYW1hLCBDby1vcCwgYW5kIEFydHMgYW5kIENyYWZ0cy4KCkluIHRoZSBldmVuaW5ncywgc3R1ZGVudHMgb2YgYWxsIGNvbG9yIGdyb3VwcyB3b3VsZCBwYXJ0YWtlIGluIGFjdGl2aXRpZXMsIGluY2x1ZGluZyBDYW1wLVdpZGUgR2FtZXMgKGEgc2VyaWVzIG9mIG1pbmlnYW1lcyBpbiB3aGljaCBjb2xvciBncm91cHMgd291bGQgY29tcGV0ZSBmb3IgdGhlIG1vc3QgcG9pbnRzKSwgQ29sb3IgQ2hhb3MgKGEgY29sbGVjdGlvbiBvZiBnYW1lcyBwbGF5ZWQgYnkgYWxsIGNhbXBlcnMgaW4gdGhlIGNhbXDigJlzIGhhbmdhciksIGFuZCBvbiB0aGUgbGFzdCBkYXksIGEgVGFsZW50IFNob3cgYW5kIGEgRGFuY2UuCgpgCWBUaGlzIHllYXIsIHR3byBuZXcgY29sb3IgZ3JvdXBzIGpvaW5lZCB0aGUgcm9zdGVyIG9mIHRoZSB0cmFkaXRpb25hbCBjb2xvcnMgb2YgdGhlIHJhaW5ib3c6IHBpbmsgYW5kIHNpbHZlci4gVGhlIHdpbm5lciBvZiB0aGUgUm9ja3MgJiBSb3BlcyBQYXJ0aWNpcGF0aW9uIHRyb3BoeSwgYSB0cm9waHkgcmVjb2duaXppbmcgdGhlIHRlYW0gdGhhdCB3YXMgbW9zdCBlbmdhZ2VkIGFuZCBpbW1lcnNlZCBkdXJpbmcgdGhlIGFjdGl2aXR5LCB3YXMgVGVhbSBQaW5rLiBIb3dldmVyLCBUZWFtIE9yYW5nZSB3b24gYm90aCB0aGUgQXJjaGVyeSBjb250ZXN0IGFuZCBDYW1wLVdpZGUgR2FtZXMuCgpgCWBXZSBjb2xsZWN0aXZlbHkgd291bGQgbGlrZSB0byB0aGFuayBNci4gSGFydGlsbCBmb3Igc3VwcG9ydGluZyB1cyBhbmQgdGhlIG9yZ2FuaXphdGlvbiBvZiB0aGlzIGNhbXAuIEFmdGVyIDE1IHllYXJzIG9mIGRlZGljYXRpb24sIGNhcmUsIGFuZCBoYXJkIHdvcmsgZm9yIExlYWRlcnNoaXAgQ2FtcCwgTXIuIEhhcnRpbGwgd2lsbCBiZSBsZWF2aW5nIHRoZSBwcm9ncmFtIGZvciBoaXMgcmV0aXJlbWVudCAtIGhlIHdpbGwgYmUgbWlzc2VkISBXaXRob3V0IGhpcyBjb250cmlidXRpb25zIGFuZCBlZmZvcnRzLCBMZWFkZXJzaGlwIENhbXAgd291bGQgbm90IGhhdmUgYmVlbiB0aGUgbWFnaWNhbCBleHBlcmllbmNlIGl0IGlzIGFuZCBoYXMgYmVlbiBmb3Igc28gbWFueSBNYXJ0aW5ncm92ZSBzdHVkZW50cy4KCkF0dGVuZGVlcyBvZiBMZWFkZXJzaGlwIENhbXAgY2FuIGxvb2sgZm9yd2FyZCB0byB0aGUgcmV1bmlvbiBicmVha2Zhc3QgdGFraW5nIHBsYWNlIGR1cmluZyB0aGUgbGF0ZSBzdGFydCBvbiBXZWRuZXNkYXksIE5vdmVtYmVyIDI5dGguIEEgbGlzdCBvZiByZXNvdXJjZXMvY29udGFjdHMgdGhhdCBzdHVkZW50cyBhcmUgYWJsZSB0byBhY2Nlc3MgaWYgdGhleSBhcmUgaW4gbmVlZCBvZiBoZWxwIChvciBqdXN0IHNvbWVvbmUgdG8gdGFsayB0bykgaXMgYXZhaWxhYmxlIG9uIHRoZSBMZWFkZXJzaGlwIENhbXAgSW5zdGFncmFtIHBhZ2UsIGZvdW5kIHdpdGggdGhlIHVzZXIg4oCcQG1jaWxlYWRlcnNoaXDigJ0uIFJlbWVtYmVyIHdlIGFyZSBhbGwgaGVyZSB0byBzdXBwb3J0IGVhY2ggb3RoZXIhCg==";export{G as default};
