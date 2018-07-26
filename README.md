#### Super list

The manually-populated object in the data.js file maps items to rough locations in our local warehouse grocery store.
Initially, we want to be able to throw an item on the next grocery list easily when we think of it or run out of something.

The store can be kind of an ordeal, so before we go, we want to roughly sort
the list in the order we'll be walking past each item, so we don't have to
depend on having to use our brains much while we're there.

The benefit of this design is remaining simple on the front end. Once the
object has data for most of the common groceries, it won't need relatively very many updates going forward. But there are also big drawbacks to this setup.



We want a simple interface with clear text that's easy to work with. When an
item's entered, it's appended to the current list. When we go to the store, the
list is sorted by the items' location data. Double-tapping an item marks it off
on the list as we go. When we're done, the list is stored for reference and we
return to the entry mode.



Potential additions:
  Tier 1:
    - Add new items to the map through the interface, along with their
    locations. This is a big, obvious shortcoming.
  Tier 2:
    - Options for accessing previous lists or the map
      - Touch an item to add it to the current list
      - Suggestions in entry mode- Type 'b' and a filtered list appears, tap
      'butter' for example to add it to the current list
      - Keep updates to the map simple. Ultimately being able to drag or tap
      to put a new addition into place relative to the existing entries might
      be the most intuitive.
    - Update a list from multiple computers, phones or tablets.
      - Local storage in case there's no network coverage in a store
      - Options for sync to access the most recent version from anywhere
        - How will this accommodate simultaneous updates?
    - Support sorting for multiple grocery stores with different store layouts
  Consider:
    - Storing nutrition information
      - Optical character recognition of a picture of a nutrition facts panel
    - Storing historical pricing information
      - Potential for OCR from a receipt?
    - Do we want to recognize specific items or brands (compared to more
    general entries, like 'pretzels') to allow for options like those?
      - Or is it easier to work with 'butter' and not have to scan through and
      a choose from a list of 5 options including 'SuperBrand unsalted goat
      butter', every time? Is it easier to just get to the butter section in
      the store and make the choice from there?
        - Could an optional note on an item work as a good alternative to help
        in cases with specific needs, while keeping the interface easier to use?
    - Is there anything else that'd be useful to help with or to track?
    - Why don't we just have our groceries delivered?