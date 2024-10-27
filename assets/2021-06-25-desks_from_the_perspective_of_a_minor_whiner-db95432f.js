const Z="data:text/markdown;base64,DQoNCioqKk5vdGUgZnJvbSBncmFkZS0xMi1TdXJiaGk6KiogVGhpcyBhcnRpY2xlIHdhcyBteSBhcHBsaWNhdGlvbiBwaWVjZQ0KZm9yIHRoZSBCZWFjb24gaW4gZ3JhZGUgOSBhbmQgaXMgbm93IG15IGZpbmFsIGNvbnRyaWJ1dGlvbiB0byB0aGUgY2x1Yi4NCldl4oCZcmUgYnJpbmdpbmcgaXQgZnVsbCBjaXJjbGUgZm9sa3MhKg0KDQoqSeKAmWxsIHBhc3MgaXQgb24gdG8gZ3JhZGUtOS1TdXJiaGkuIFdl4oCZbGwgdGFsayBhZ2FpbiBhdCB0aGUgZW5kLioNCg0KLS0tDQoNCkR1cmluZyB0aGUgc3VtbWVyLCBmYW1pbHkgYW5kIGZyaWVuZHMgd291bGQgYXNrIG1lIHdoYXQgZ3JhZGUgSSB3YXMgaW4sDQpzbyBJ4oCZZCB0ZWxsIHRoZW0gSSB3YXMgZ29pbmcgdG8gc3RhcnQgbmludGggZ3JhZGUuIEnigJlkIGFsd2F5cyBnZXQgdGhlDQpzYW1lIHJlYWN0aW9uLCDigJxTbyB5b3XigJlyZSBzdGFydGluZyAqaGlnaCBzY2hvb2wuKiBBcmUgeW91IHJlYWR5P+KAnSBJDQp3b3VsZG7igJl0IGtub3cgaG93IHRvIHJlc3BvbmQgYmVjYXVzZSBJIGRpZG7igJl0IGtub3cgYW55dGhpbmcgYWJvdXQgaGlnaA0Kc2Nob29sLiBNeSBwZXJjZXB0aW9uIG9mIGhpZ2ggc2Nob29sIHdhcyBiYXNlZCBvbiBhbGwgdGhlIHRoaW5ncyBteQ0KbWlkZGxlIHNjaG9vbCB0ZWFjaGVycyB3YXJuZWQgbWUgYWJvdXQgLSB0aGUgd29ya2xvYWQsIHN0cmljdCB0ZWFjaGVycywNCmFuZCB0YWxsIGdyYWRlIHR3ZWx2ZXMgLSBidXQgZ2V0dGluZyB1c2VkIHRvIGFsbCBvZiB0aG9zZSB3YXMgZWFzeQ0KY29tcGFyZWQgdG8gKnRoZSBkZXNrcy4qIERvbuKAmXQgZ2V0IG1lIHdyb25nLCBJIHRoaW5rIHRoZXNlIGRlc2tzIGFyZQ0KYW1hemluZyBpbiBtYW55IHdheXMgLSB0aGVpciB0YWJsZXMgc2xpZ2h0bHkgdGlsdGVkIHRvIHRoZSBwZXJmZWN0IGFuZ2xlDQpmb3IgZnJhbnRpY2FsbHkgZmluaXNoaW5nIHlvdXIgdGhpcmQgdGVzdCBvZiB0aGUgZGF5LCB0aGVpciBiZWF1dGlmdWwNCmZsdW9yaWRlLWdyZWVuIGh1ZSwgYW5kIHRoZSBmb290cmVzdCB1bmRlciB0aGUgc2VhdHMsIGp1c3QgdGhlIHJpZ2h0DQpzaXplIGZvciB0aGUgYm9va3MgeW91IGtlZXAgaW4geW91ciBiYWcgLSBidXQgKmJ1aWx0LWluKiBjaGFpcnM/DQoNCkkga25vdyBJ4oCZbSBub3QgdGhlIG9ubHkgb25lIHdobyBzdHJ1Z2dsZWQgd2l0aCB0aGUgY2hhaXJzIGJlaW5nIGF0dGFjaGVkDQp0byB0aGUgZGVza3MuIEkgdml2aWRseSByZW1lbWJlciB0aGUgZmlyc3QgZmV3IGRheXMgb2Ygc2Nob29sIHdoZW4gdGhlDQpkaXNtaXNzYWwgYmVsbCB3YXMgZm9sbG93ZWQgYnkgdGhlIHNvdW5kIG9mIHR3ZW50eS1maXZlIGNoYWlyLWRlc2sNCmh5YnJpZHMgc2NyYXBpbmcgYWdhaW5zdCB0aGUgZmxvb3IsIGFuZCB0aGUgc2lnaHQgb2YgdHdlbnR5LWZpdmUNCnN0dWRlbnRzIHNoaWZ0aW5nIGJhY2t3YXJkcyBpbiB1bmlzb24uIFdlIGNvdWxkIG5vIGxvbmdlciBzaW1wbHkgc2Nvb3QNCm91ciBjaGFpcnMgYmFjayBhbmQgc3RhbmQ7IGluc3RlYWQsIHdlIGhhZCB0byBzbmFrZSBvdXIgd2F5IHRocm91Z2ggdGhlDQptYXplIGNyZWF0ZWQgYnkgb3VyIGRlc2sgYW5kIHRoZSBvbmUgYWRqYWNlbnQuIEl0IHNlZW1lZCB0byBtZSB0aGF0DQphZnRlciBhIHdoaWxlLCBldmVyeW9uZSBlbHNlIGhhZCBtb3ZlZCBvbiBhbmQgaXQgd2FzIG9ubHkgbXkgbG9uZQ0Kc3F1ZWFreSBzdHJ1Z2dsZXMgZWNob2luZyB0aHJvdWdoIHRoZSBlbXB0eSBjbGFzc3Jvb20uDQoNClNpZ25zIG9mIGdyb3d0aCBhcmUgYWxyZWFkeSBldmlkZW50IGluIHRoZSBjbGFzcyBvZiAyMDIxOyB0b2RheSwgSSBoZWFyDQpubyBzb3VuZHMgb2YgdGhvc2UgdHJ5aW5nIHRvIHdyaWdnbGUgZnJlZSBmcm9tIHRoZWlyIGRlc2suIFdl4oCZdmUgZG9uZQ0KaXQuIEkgZmluZCBteXNlbGYgc3RhcnRpbmcgdG8gbG92ZSB3aGF0IEkgdXNlZCB0byBoYXRlIGFib3V0IHRoZSBkZXNrczsNCnRoZSBjaGFpciBiZWluZyBhdHRhY2hlZCB0byB0aGUgZGVzayBtYXkgYmUgaW5jb252ZW5pZW50IHdoZW4gdHJ5aW5nIHRvDQpsZWF2ZSwgYnV0IEkgbG92ZSB0aGUgaW5ub3ZhdGl2ZSAyLWluLTEgZnVybml0dXJlIGNvbmNlcHQuIEluIHNvbWUgd2F5LA0KaXQgbWFrZXMgbWUgZmVlbCBzZWN1cmUgYW5kIHByb3RlY3RlZC4gVGhlc2UgZGVza3MgYXJlIG5vIGxvbmdlcg0Kb2JzdGFjbGVzIGluIG15IG1pbmQuIEnigJltIHN0YXJ0aW5nIHRvIGZlZWwgbGlrZSBhIHJlYWwgYmVhci4gTm93IEkganVzdA0KbmVlZCB0byBmaWd1cmUgb3V0IHdoZXJlIG15IGdlb2dyYXBoeSBjbGFzcyBpcy4NCg0KLS0tDQoNCioqKk5vdGUgZnJvbSBncmFkZS0xMi1TdXJiaGk6KiogSGVsbG8gYWdhaW4hIFRob3VnaCB3ZSBoYXZlbuKAmXQgZ290dGVuIHRvDQpzZWUgb3VyIGJlbG92ZWQgY3Jvc3MtYnJlZCBzZWF0cyBtdWNoIHRoaXMgeWVhciwgSSBob3BlIHlvdSBjb3VsZCBzdGlsbA0KcmVsYXRlIHRvIHRoaXMgYXJ0aWNsZS4qDQoNCipUbyB0aGUgY2xhc3Mgb2YgMjAyMTogY29uZ3JhdHVsYXRpb25zISBJIGhvcGUgeW91IHJlY29nbml6ZSB0aGF0DQp3aGF0ZXZlciB5b3VyIGZlYXJzIGFuZCBzdHJ1Z2dsZXMgbWF5IGhhdmUgYmVlbiBsZWF2aW5nIG1pZGRsZSBzY2hvb2wsDQp5b3UgZGlkIGl0LiBBbmQgd2hlbiB5b3UgbGVhdmUgaGlnaCBzY2hvb2wsIHlvdeKAmWxsIGRvIGl0IGFnYWluLioNCg0KDQoNCipJbWFnZSBTb3VyY2U6IOKAnE1DSSBEZXNrc+KAnSB0YWtlbiBieSBFbWlseSBQYXJrKg0K";export{Z as default};