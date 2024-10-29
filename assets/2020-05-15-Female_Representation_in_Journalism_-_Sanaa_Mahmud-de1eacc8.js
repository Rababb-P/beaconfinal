const G="data:text/markdown;base64,DQoNCkltYWdpbmUgeW91IGdldCBhIGpvYiBpbiB5b3VyIGRyZWFtIGZpZWxkIG9mIHdvcmsuIFlvdSBzdGFydCBvZmYgd2VsbCwNCnlldCBhZnRlciBhIHdoaWxlLCB5b3UgcmVhbGl6ZSB0aGF0IHlvdXIgcm9sZSBpbiB0aGUgY29tcGFueSBpcyBub3QNCmFkdmFuY2luZyBhbmQgeW91ciB3b3JrIGlzIGJlaW5nIGxpbWl0ZWQuIFRoaXMgaXMgaG93IHdvbWVuIGluDQpqb3VybmFsaXNtIGZlZWwgb24gYSBkYWlseSBiYXNpcy4gRGVzcGl0ZSB0aGUgbWFqb3Igc3RyaWRlcyBtYWRlDQpyZWdhcmRpbmcgZ2VuZGVyIGVxdWFsaXR5LCB0aGUgd29ybGQgb2Ygam91cm5hbGlzbSBpcyBzdGlsbCB2ZXJ5DQppbWJhbGFuY2VkIHdoZW4gaXQgY29tZXMgdG8gdGhlIHJlcHJlc2VudGF0aW9uIG9mIG1hbGVzIHZlcnN1cyBmZW1hbGVzLg0KSW4gcmVjZW50IHllYXJzLCBzdHVkaWVzIGFuZCBkYXRhIGhhdmUgc2hvd24gdGhhdCB0aGVyZSBhcmUgbW9yZSBmZW1hbGVzDQptYWtpbmcgdXAgam91cm5hbGlzbSBzdHVkZW50cyBpbiB1bml2ZXJzaXRpZXMgYW5kIGNvbGxlZ2VzLiBZZXQsIGZlbWFsZXMNCm9ubHkgbWFrZSB1cCAzOSUgb2YgbmV3c3Jvb21zLiBUaGVyZWZvcmUsIHRoZSBuZXdzIGlzIHByZWRvbWluYW50bHkNCmNvdmVyZWQgYnkgbWVuLsKgDQoNCkEgbG90IG9mIHRoaXMgaW1iYWxhbmNlIGluIHJlcHJlc2VudGF0aW9uIGNvbWVzIGZyb20gcGFzdCBhbmQgY3VycmVudA0KZ2VuZGVyIHN0ZXJlb3R5cGVzLiBJbiAyMDE2LCBpdCB3YXMgcmVwb3J0ZWQgdGhhdCBpbiB0aGUgVW5pdGVkIFN0YXRlcywNCmZpZWxkcyBvZiByZXBvcnRpbmcgd2l0aCBvdmVyIDUwJSBvZiBmZW1hbGUgcmVwcmVzZW50YXRpb24gaW5jbHVkZWQNCmxpZmVzdHlsZSwgZWR1Y2F0aW9uLCBhbmQgaGVhbHRoY2FyZS4gV2hlcmVhcywgdGhlcmUgd2FzIGxlc3MgdGhhdCAzMCUNCm9mIGZlbWFsZSByZXByZXNlbnRhdGlvbiBpbiB0b3BpY3Mgc3VjaCBhcyBzcG9ydHMsIHdlYXRoZXIsIGFuZCBjcmltZQ0KYW5kIGp1c3RpY2UuIEluIENhbmFkaWFuIG5ld3Nyb29tcywgbWFueSBtYWpvciBuZXdzIG9yZ2FuaXphdGlvbnMgaGF2ZQ0KYWxzbyBzaG93biBsYXJnZSBnZW5kZXIgZ2FwcywgYWNjb3JkaW5nIHRvIGEgMjAxNSBzdHVkeS4gKlRoZSBHbG9iYWwNCk1lZGlhIE1vbml0b3JpbmcgUHJvamVjdCogbG9va2VkIGludG8gMjMgQ2FuYWRpYW4gbmV3cyBvcmdhbml6YXRpb25zLA0KaW5jbHVkaW5nICpDQkMqLCAqQ1RWKiwgKnRoZSBUb3JvbnRvIFN0YXIqLCBhbmQgKnRoZSBHbG9iZSBhbmQgTWFpbCouDQpUaGV5IGZvdW5kIHRoYXQgb25seSA0MyUgb2YgcmVwb3J0ZXJzIHdlcmUgZmVtYWxlLCBhbmQgdGhhdCBvbmx5IDMxJSBvZg0Kd29tZW4gcmVwb3J0ZXJzIGhhZCBjb3ZlcmVkIHN0b3JpZXMgcmVnYXJkaW5nIHBvbGl0aWNzIGFuZCBnb3Zlcm5tZW50Lg0KQWRkaXRpb25hbGx5LCB0aGUgc3R1ZHkgZm91bmQgdGhhdCB3b21lbiB3ZXJlIG1vcmUgbGlrZWx5IHRoYW4gbWVuIHRvDQppbmNsdWRlIGZlbWFsZSBzb3VyY2VzIGluIHRoZWlyIGFydGljbGVzLsKgDQoNCllvdSBtdXN0IGJlIHdvbmRlcmluZzogV2h5IGlzIGVxdWFsIHJlcHJlc2VudGF0aW9uIGluIHRoZSBuZXdzDQppbXBvcnRhbnQ/IE9uZSBtYWpvciByZWFzb24gdGhhdCBnZW5kZXIgZXF1YWxpdHkgaW4gdGhlIG1lZGlhIG1hdHRlcnMgaXMNCmJlY2F1c2Ugd29tZW4gYnJpbmcgbmV3IGFuZCBkaWZmZXJlbnQgcGVyc3BlY3RpdmVzIHRvIGpvdXJuYWxpc20sDQpzcGFya2luZyBtb3JlIGludGVyZXN0IGluIGdsb2JhbCBuZXdzIGFuZCBjcmVhdGluZyBhIGJyb2FkZXIgYXVkaWVuY2UuDQoqVGhlIFdvbWVuJ3MgTWVkaWEgQ2VudGVyKiBwdXQgb3V0IGEgc3R1ZHkgaW4gMjAxNywgb3V0bGluaW5nIHRoZQ0KY29uc2VxdWVuY2VzIG9mIGEgbGFjayBvZiBmZW1hbGUgcmVwcmVzZW50YXRpb24gaW4gam91cm5hbGlzbS4gVGhlIHN0dWR5DQpzdGF0ZWQgdGhhdCBpbiAxMiB0b3AgVS5TLiBuZXdzIG91dGxldHMsIGNhbXB1cyBzZXh1YWwgYXNzYXVsdCBzdG9yaWVzDQp3ZXJlIG1haW5seSB3cml0dGVuIGJ5IG1lbi4gSW4gdGhlc2Ugc3RvcmllcywgbWFsZSBqb3VybmFsaXN0cyB3ZXJlIG1vcmUNCmxpa2VseSB0byBmb2N1cyBvbiB0aGUgaW1wYWN0IG9uIHRoZSBwZXJwZXRyYXRvciwgYW5kIGhpcyBiZWhhdmlvdXINCnN1cnJvdW5kaW5nIHJhcGUgY2hhcmdlcy4gT24gdGhlIG90aGVyIGhhbmQsIGZlbWFsZSBqb3VybmFsaXN0cyB3aG8NCmNvdmVyZWQgc2V4dWFsIGFzc2F1bHQgd2VyZSBtb3JlIGxpa2VseSB0byBmb2N1cyBvbiB0aGUgdmljdGltJ3MNCmJlaGF2aW91ciwgYW5kIGhvdyByYXBlIGltcGFjdGVkIHRoZW0uIFRoaXMgaXMganVzdCBvbmUgZXhhbXBsZQ0KcmV2ZWFsaW5nIGEgZGlmZmVyZW5jZSBpbiBwZXJzcGVjdGl2ZSB0aGF0IG9jY3VycyB3aGVuIHRoZSBzYW1lIHR5cGUgb2YNCnN0b3J5IGlzIGNvdmVyZWQgYnkgYSBtYW4gb3IgYSB3b21hbi4gV29tZW4gYWxzbyBlbXBoYXNpemUgZGlmZmVyZW50DQppZGVhcyB0aGFuIG1lbi4gQSBzdHVkeSBpbiAyMDEzIGZvdW5kIHRoYXQgd29tZW4gd3JpdGluZyBlZGl0b3JpYWwNCnBpZWNlcyBwcm9taW5lbnRseSB1c2VkIHdvcmRzIGluY2x1ZGluZyBhYnVzZSwgYXNzYXVsdCwgY2hpbGRyZW4sDQplcXVhbGl0eSwgZWR1Y2F0aW9uLCBkaXNjcmltaW5hdGlvbiwgYW5kIHZpb2xlbmNlLiBUaGlzIGRpZmZlcmVuY2UgaW4NCnN1YmplY3QgbWF0dGVyIGFuZCBwZXJzcGVjdGl2ZSBpcyBpbXBvcnRhbnQgdG8gaGF2ZSBpbiB0aGUgbWVkaWEsDQplc3BlY2lhbGx5IGluIG5ld3MgYW5kIGJyb2FkY2FzdGluZy4gSXQgcHJvdmlkZXMgYSBtb3JlIGRldGFpbGVkIGFuZA0KY29tcHJlaGVuc2l2ZSBzdG9yeSwgaGVscGluZyB0aGUgYXVkaWVuY2UgdG8gYmVjb21lIGJldHRlci1pbmZvcm1lZC7CoA0KDQpOb3csIHRoZXJlIGlzIG9uZSBtYWpvciBxdWVzdGlvbiBsZWZ0OiBJcyBpdCBwb3NzaWJsZSB0byBoYXZlIGVxdWFsDQpyZXByZXNlbnRhdGlvbiBpbiBuZXdzcm9vbXMsIGFuZCBob3cgY2FuIHdlIGFjaGlldmUgaXQ/IEZpcnN0bHksIGl0IGlzDQpUT1RBTExZIHBvc3NpYmxlIHRvIHJlcHJlc2VudCBtYWxlcyBhbmQgZmVtYWxlcyBlcXVhbGx5IGluIGpvdXJuYWxpc20hDQpUaGUgd29ybGQgb2YgcmVwb3J0aW5nLCBicm9hZGNhc3RpbmcsIGFuZCBuZXdzIHdvdWxkIGJlIGZhciBiZXR0ZXIgaWYNCnRoZXJlIHdlcmUgbWFueSBjb250cmFzdGluZyBwZXJzcGVjdGl2ZXMgb24gd29ybGQgaXNzdWVzLiBKb3VybmFsaXNtDQpjb3VsZCBiZSBlbGV2YXRlZCBmcm9tIHdoYXQgaXQgaXMgbm93LCB0byBrZWVwIG5hdGlvbmFsIGFuZCBnbG9iYWwNCmF1ZGllbmNlcyBlbmdhZ2VkIGFuZCB3ZWxsLWluZm9ybWVkLiBUbyBhY2hpZXZlIHRoaXMgcHJvcGVyIGJhbGFuY2UsIHdlDQpjYW4gYmUgYXdhcmUgb2YgdGhlIGNoYWxsZW5nZXMgdGhhdCB3b21lbiBpbiBqb3VybmFsaXNtIGZhY2UsIGFuZCBzdGFuZA0KdXAgZm9yIHRoZWlyIHJpZ2h0IHRvIGVxdWFsIHJlcHJlc2VudGF0aW9uIGFuZCBvcHBvcnR1bml0aWVzLiBXZSBjYW4gdXNlDQpvdXIgdm9pY2VzLCBhcyB3ZWxsIGFzIHNvY2lhbCBtZWRpYSBwbGF0Zm9ybXMgdG8gYWR2b2NhdGUgZm9yIHRoaXMNCmNhdXNlLCBhbmQgaW5mb3JtIHRob3NlIGFyb3VuZCB1cyBhYm91dCB0aGUgaXNzdWUuwqANCg0KSW1hZ2UgU291cmNlOiAqIldvbWFuIFdyaXRpbmcgaW4gTm90ZWJvb2siIGJ5IEl2YW4gU2Fta292IGZyb20gUGV4ZWxzKg0K";export{G as default};
