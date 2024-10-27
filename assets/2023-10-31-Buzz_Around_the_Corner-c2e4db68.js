const B="data:text/markdown;base64,77u/KipXaGF04oCZcyB0aGF0IEJ1enogYXJvdW5kIHRoZSBDb3JuZXI/KioNCg0KTUNJIGhhcyBhIHByb2JsZW0uIFN0dWRlbnRzIGFyZSBiZWluZyBhdHRhY2tlZCBhdCBsdW5jaHRpbWUgYnkgYSBiaW9sb2dpY2FsIG1vbnN0cm9zaXR5IHRoYXQgbGVhdmVzIG5vIGZvb2QgdW50b3VjaGVkIGFuZCBubyBjaGlsZCB1bnN0dW5nLiBUaGlzIGRlc3BpY2FibGUgY3JlYXR1cmUgaGFzIHN0dWRlbnRzIHJ1bm5pbmcgZm9yIHRoZWlyIGxpdmVzLCBmb2xsb3dpbmcgdGhlbSBhbGwgdGhlIHdheSBmcm9tIFRpbSBIb3J0b25zIHRvIE1DSS4gSGF2ZSB5b3UgZXZlciBiZWVuIHRoZSB2aWN0aW0gb2YgYSB3YXNwIGF0dGFjaz8gV2FzcHMgaGF2ZSBiZWVuIGtub3duIGZyb20gYW5jaWVudCB0aW1lcyB0byBiZSB0aGUgYmFuZSBvZiBzdHVkZW50cyBhbGwgb3ZlciB0aGUgd29ybGQuIFVuZm9ydHVuYXRlbHksIGl0IHNlZW1zIHRoYXQgd2FzcHMgaGF2ZSB0YWtlbiBhIHBhcnRpY3VsYXIgbGlraW5nIHRvIE1DSSwgYXMgeW91IGNhbuKAmXQgZXZlbiBzdGVwIG91dHNpZGUgb2YgdGhlIHNjaG9vbCB3aXRob3V0IGJlaW5nIGNoYXNlZCBieSBhIHdhc3AuDQoNCjxici8+DQoNCldhc3BzIGhhdmUgYWxzbyB0YWtlbiBvdmVyIHRoZSBUaW0gSG9ydG9ucyBuZXh0IHRvIE1DSSwgYXMgSGFzZWliIE5hc3JhdCwgYSBncmFkZSAxMSBzdHVkZW50IGF0IE1hcnRpbmdyb3ZlLCBsZWFybmVkIHRoZSBoYXJkIHdheS4gT25lIEZyaWRheSBhZnRlcm5vb24sIEhhc2VpYiB3YXMgcGVhY2VmdWxseSB3YWl0aW5nIHRvIG9yZGVyIHNvbWUgVGltbWllcywgd2hlbiBhIHdhc3Agc2l0dGluZyBvbiB0aGUgd2luZG93c2lsbCBkZWNpZGVkIEhhc2VpYiB3YXMgaXRzIGVuZW15LiBUaGUgd2FzcCBmbGV3IG92ZXIgYW5kIHN0dW5nIEhhc2VpYiB0d2ljZSwgb24gaGlzIHNob3VsZGVyIGFuZCBsZWcsIHdoaWNoIGNhdXNlZCBoaW0gbW9kZXJhdGUgcGFpbi4gTmF0dXJhbGx5LCBIYXNlaWIgZGlkIG5vdCBlbmpveSB0aGlzIGV4cGVyaWVuY2UsIGFuZCB3aGVuIGFza2VkIGZvciBoaXMgb3BpbmlvbiBvbiB3YXNwcywgaGUgc3RhdGVkLCDigJxXYXNwcyBzdWNrLOKAnSB3aGljaCBpcyBhbiBvcGluaW9uIG1hbnkgTUNJIHN0dWRlbnRzLCBpbmNsdWRpbmcgbXlzZWxmLCB3aG9sZWhlYXJ0ZWRseSBhZ3JlZSB3aXRoLg0KDQo8YnIvPg0KDQpBbHRob3VnaCB3YXNwcyBhcmUgdXN1YWxseSB0aGUgb25lcyBzdGluZ2luZyBzdHVkZW50cyBhdCBNQ0ksIHRoZWlyIGZyaWVuZGxpZXIgY291bnRlcnBhcnRzLCBiZWVzLCBvZnRlbiB0YWtlIHRoZSBibGFtZS4gQXMgc2ltaWxhciBhcyB0aGV5IHNlZW0sIHdhc3BzIHNob3VsZCBub3QgYmUgbWl4ZWQgdXAgd2l0aCBiZWVzLiBUaGUgYmlnZ2VzdCBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3byBpcyB0aGVpciBzdGluZ3MuIEhvbmV5IGJlZXMgY2FuIG9ubHkgc3Rpbmcgb25jZSwgYXMgdGhlaXIgYmFyYmVkIHN0aW5nZXIgZ2V0cyBzdHVjayBhbmQgdG9ybiBvZmYgYWZ0ZXIgdGhleSBzdGluZyBzb21ldGhpbmcsIHdoaWNoIGlzIHR5cGljYWxseSBmYXRhbCBmb3IgdGhlbSwgc28gdGhleSBvbmx5IHN0aW5nIGluIHNlbGYtZGVmZW5jZS4gV2FzcHMsIG9uIHRoZSBvdGhlciBoYW5kLCBhcmUgb2Z0ZW4gbW9yZSBhZ2dyZXNzaXZlIHRoYW4gYmVlcywgYXMgdGhleSB3aWxsIGF0dGFjayBhbnlvbmUgbmVhciB0aGVpciBuZXN0LCBhbmQgdGhleSBjYW4gc3RpbmcgbXVsdGlwbGUgdGltZXMsIHdoaWNoIGlzIGhvdyBIYXNlaWIga25ldyBoZSB3YXMgc3R1bmcgYnkgYSB3YXNwLiBBbm90aGVyIGJpZyBkaWZmZXJlbmNlIGJldHdlZW4gYmVlcyBhbmQgd2FzcHMgaXMgd2hhdCB0aGV5IGVhdC4gVGhlIGRpZXQgb2YgYmVlcyBjb25zaXN0cyBzaW1wbHkgb2YgcG9sbGVuIGFuZCBuZWN0YXIsIGJ1dCB3YXNwcyBhcmUgYmxvb2R0aGlyc3R5IHByZWRhdG9ycywgZmVhc3Rpbmcgb24gaW5zZWN0cywgbGFydmFlLCBhbmQgc29tZXRpbWVzIGV2ZW4gTUNJIHN0dWRlbnRzIQ0KDQo8YnIvPg0KDQpBcyB5b3UgY2FuIHNlZSwgd2FzcHMgYW5kIGJlZXMgYXJlIHByZXR0eSBkaWZmZXJlbnQsIHNvIHRoZSBuZXh0IHRpbWUgeW91IGdldCBjaGFzZWQgYnkgYSBmbHlpbmcgZGVtb24sIHJlbWVtYmVyIHRoYXQgaXQncyBwcm9iYWJseSBhIHdhc3AsIG5vdCBhIGJlZS4NCg0KPGJyLz4NCg0KQmVlIHNhZmUgTWFydGluZ3JvdmUhDQo=";export{B as default};