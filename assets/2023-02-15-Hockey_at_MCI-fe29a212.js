const G="data:text/markdown;base64,CgpNQ0kgSG9ja2V5IGlzIGJhY2ssIGFuZCBiZXR0ZXIgdGhhbiBldmVyISBMYXN0IHllYXIsIE1DSSBmaW5pc2hlZCB3aXRoIGEKZGlzYXBwb2ludGluZyBsYXN0IHBsYWNlLCBhbmQgbWlzc2VkIHRoZSBwbGF5b2Zmcy4gVGhpcyB5ZWFyLCB3aXRoIGEKcm9zdGVyIGZpbGxlZCB3aXRoIGEgbXVsdGl0dWRlIG9mIGdyYWRlIHR3ZWx2ZXMsIHRoZXJlIHdhcyBhIGZlZWxpbmcKdGhhdCB0aGlzIHdvdWxkIGJlIHRoZSBwZWFrIHllYXIuIEV4cGVjdGF0aW9ucyB3ZXJlIGhpZ2gsIGJ5IE1DSQpzdGFuZGFyZHMsIHdpdGggY29hY2ggVnVqYWNpYyBzYXlpbmcgdGhhdCB0aGUgdGVhbSBoYWQgYSB2ZXJ5IGdvb2Qgc2hvdAphdCBhIHRpZSwgYW5kIHRoYXQgdGhlIHRlYW0gY291bGQgc2NvcmUgYXQgbGVhc3QgNCBnb2Fscy4gVGhlIGZ1bGwKaW50ZXJ2aWV3IGNhbiBiZSBmb3VuZCBvbiB0aGUgSW5zdGFncmFtIHBhZ2UgQG1jaS5ob2NrZXkuCjxicj48YnI+ClRoZXkgaGFkIGFuIGluY3JlZGlibGUgZmlyc3QgZ2FtZSwgZXhjZWVkaW5nIGFsbCBleHBlY3RhdGlvbnMgYnkgd2lubmluZwp0aGUgdGVhbeKAmXMgZmlyc3QgZ2FtZSBpbiBmb3VyIHllYXJzIGFnYWluc3QgU2lsdmVydGhvcm4gQ0ksIGJ5IGEKd2hvcHBpbmcgc2NvcmUgb2YgNy0xLiBUaGUgbmV4dCBnYW1lIHdhcyB0aGUgZmlyc3QgcmVhbCB0ZXN0LCBwbGF5aW5nCmFnYWluc3QgYSB2ZXJ5IHRvdWdoIEV0b2JpY29rZSBDSSByb3N0ZXIsIGZlYXR1cmluZyBjb2FjaCBWdWphY2lj4oCZcyBvd24Kc29uLiBUaGUgdGVhbSBmb3VnaHQgdGlyZWxlc3NseSBhbmQgbWFuYWdlZCB0byBnZXQgYSBjbG9zZSAzLTIgd2luLiBPbmUKcHJvYmxlbSBkdXJpbmcgdGhlIGdhbWUgb2NjdXJyZWQgd2hlbiB0aGUgc3RhcnRpbmcgZ29hbGllLCBFdmFuIENoZXJyeSwKY29sbGlkZWQgd2l0aCBhIHBsYXllciB3aGlsZSBzYXZpbmcgYSBicmVha2F3YXkgc2hvdC4gSGUgc3VmZmVyZWQgYQptaW5vciBoZWFkIGluanVyeSwgYnV0IGZpbmlzaGVkIHRoZSBnYW1lIHN0cm9uZy4gTGF0ZXIsIGluIG9uZSBvZiBoaXMKb3duIGhvY2tleSBnYW1lcywgaGUgdG9vayBhIHNob3QgdG8gdGhlIGhlYWQgYW5kIGxlZnQgdGhlIGljZSB3aXRoIGEKY29uY3Vzc2lvbi4gVGhpcyBsZWQgdG8gbmVlZGluZyBhIGJhY2t1cCBnb2FsaWUgdG8gcGxheSBhZ2FpbnN0IHRoZSBiZXN0CnRlYW0sIEh1bWJlcnNpZGUgQ0kuIEx1Y2tpbHksIG5vbmUgb3RoZXIgdGhhbiB0aGUgdmVyeSBwZXJzb24gd2hvIGlzCndyaXRpbmcgdGhpcyBhcnRpY2xlIHN0ZXBwZWQgaW4uIE5vdCBzbyBsdWNraWx5LCBpdCB3YXMgbXkgZmlyc3QgZ2FtZQpldmVyLiBEZXNwaXRlIGJlaW5nIGhpdCBpbiB0aGUgaGVhZCAzIHRpbWVzIGR1cmluZyB3YXJtIHVwLCBJIG1hbmFnZWQgdG8KcHV0IGluIGEgc29saWQgcGVyZm9ybWFuY2UsIG9ubHkgYWxsb3dpbmcgMTIgZ29hbHMgaW4gd2hpbGUgc2F2aW5nIGF0CmxlYXN0IDI1IGluIGEgMTItMiBsb3NzLiBOb3QgdG9vIGJhZCBmb3IgYSByb29raWUuCjxicj48YnI+ClRoaXMgeWVhciwgTUNJIHN0dWRlbnRzIGFyZSBhbGxvd2VkIHRvIHZpZXcgYmVoaW5kIHRoZSBzY2VuZXMgZm9vdGFnZSBvZgp0aGUgdGVhbSwgd2l0aCB0aGUgbWFuYWdlcnMgb3BlcmF0aW5nIGEgdGVhbSBwYWdlIG9uIEluc3RhZ3JhbSB0aGF0CmFyZ3VhYmx5IHJpdmFscyBjZXJ0YWluIHRlYW1zIGluIHRoZSBOSEwuCjxicj48YnI+CldpdGggYSBkaWZmZXJlbnQgZHJlc3MgY29kZSBldmVyeSBnYW1lLCBNQ0kgaXMgYWx3YXlzIHRoZSBtb3N0IHN0eWxpc2gKdGVhbSB0aGVyZS4gVGhlIHRlYW0gaGFzIHJvY2tlZCBzdWl0cyBmb3IgYnVzaW5lc3MgY2FzdWFsIGRheSwgYmVhY2gKYXR0aXJlIGZvciBiZWFjaCBkYXksIGFuZCB0aGUgdWdsaWVzdCBzd2VhdGVycyBwb3NzaWJsZSBvbiB1Z2x5IHN3ZWF0ZXIKZGF5LiBXaXRoIGFjY2VzcyB0byBwb3N0LWdhbWUgdGVhbSBjZWxlYnJhdGlvbnMsIGFzIHdlbGwgYXMgc2VlaW5nIHRoZQpiZXN0IOKAnHBsYXllciBvZiB0aGUgZ2FtZeKAnSByZWNlaXZlIHRoZSB0ZWFtIHRpYXJhIGFmdGVyIGVhY2ggdG91cm5hbWVudCwKb3VyIGhvY2tleSB0ZWFtIGhhcyBiZWNvbWUgb25lIG9mIHRoZSBtb3N0IHBvcHVsYXIgc3BvcnRzIHRlYW1zIGF0IE1DSS4KVGhlIHRlYW0gZmFjZXMgYSB0b3VnaCBzY2hlZHVsZSwgYnV0IGZvciBub3csIGxldOKAmXMganVzdCBzaXQgYmFjayBhbmQKZW5qb3kgc29tZSBvZiB0aGUgYmVzdCBob2NrZXkgTUNJIGhhcyBldmVyIHNlZW4uCg==";export{G as default};