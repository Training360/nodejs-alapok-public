# File mode flags

- r: Open for reading. An exception occurs if the file does not exist.
- r+: Open for reading and writing. An exception occurs if the file does not exist.
- rs: Open for reading in synchronous mode, which instructs the operating system to bypass the system cache. This is mostly used for opening files on NFS mounts; it does not make open() a synchronous method.
- rs+: Open for reading and writing in synchronous mode.
- w: Open for writing. If the file does not exist, it is created. If the file already exists, it is truncated.
- wx: Similar to the w flag, but the file is opened in exclusive mode. Exclusive mode ensures that the files are newly created.
- w+: Open for reading and writing. If the file does not exist, it is created. If the file already exists, it is truncated.
- wx+: Similar to the w+ flag, but the file is opened in exclusive mode.
- a: Open for appending. If the file does not exist, it is created.
- ax: Similar to the a flag, but the file is opened in exclusive mode.
- a+: Open for reading and appending. If the file does not exist, it is created.
- ax+: Similar to the a+ flag, but the file is opened in exclusive mode.