# Rust Cheat Sheet for leetcode

## list

## hash table

use `use std::collections::HashMap;` to import HashMap

```rust
let mut map = HashMap::new();
```

[samplecode](../../leetcode/202.happy-number.rs)

use `map.insert(key, value)` to insert a key-value pair
also can use this to update a existing key-value pair.

use `map.entry(key).or_insert(value)` to insert a key-value pair if the key does not exist.

but this is too hard to remember, so I suggest to use

```rust
 if let Some(&count) = hash_map_b.get(&char) {
     hash_map_b.insert(char, count + 1);
     } else {
        hash_map_b.insert(char, 1);
}
```

[samplecode](../../leetcode/242.valid-anagram.rs)

this seems more clear. Also need to remember that `hash_map_b.get(&char)` returns a `Option<&i32>`, so need to use `Some(&count)` to get the value.
