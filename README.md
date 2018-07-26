#### Super list

The manually-populated object in the data.js file maps items to rough locations in our local warehouse grocery store.  
Initially, we want to be able to throw an item on the next grocery list easily when we think of it or run out of something.

The store can be kind of an ordeal, so before we go, we want to roughly sort
the list in the order we'll be walking past each item, so we don't have to
depend on having to use our brains much while we're there.

The benefit of this design is remaining simple on the front end. Once the
object has data for most of the common groceries, it won't need relatively very many updates going forward. But there are also big drawbacks to this setup.


&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
  
  
We want a simple interface with clear text that's easy to work with. When an
item's entered, it's appended to the current list. When we go to the store, the
list is sorted by the items' location data. Double-tapping an item marks it off
on the list as we go. When we're done, the list is stored for reference and we
return to the entry mode.


&nbsp;&nbsp;
&nbsp;&nbsp;
&nbsp;&nbsp;
  
  
Potential additions:  
&nbsp;&nbsp;&nbsp;&nbsp;  Tier 1:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Add new items to the map through the interface, along with their
    locations. This is a big, obvious shortcoming.  
&nbsp;&nbsp;&nbsp;&nbsp;  Tier 2:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Options for accessing previous lists or the map  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - Touch an item to add it to the current list  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - Suggestions in entry mode- Type 'b' and a filtered list appears, tap
      'butter' for example to add it to the current list  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - Keep updates to the map simple. Ultimately being able to drag or tap
      to put a new addition into place relative to the  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      existing entries might
      be the most intuitive.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Update a list from multiple computers, phones or tablets.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - Local storage in case there's no network coverage in a store  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - Options for sync to access the most recent version from anywhere  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        - How will this accommodate simultaneous updates?  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Support sorting for multiple grocery stores with different store layouts  
&nbsp;&nbsp;&nbsp;&nbsp;  Consider:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Storing nutrition information  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - Optical character recognition of a picture of a nutrition facts panel  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Storing historical pricing information  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - Potential for OCR from a receipt?  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Do we want to recognize specific items or brands (compared to more
    general entries, like 'pretzels') to allow for options  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    like those?  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - Or is it easier to work with 'butter' and not have to scan through and
      a choose from a list of 5 options including  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'SuperBrand unsalted goat
      butter', every time? Is it easier to just get to the butter section in
      the store and make the  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      choice from there?  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        - Could an optional note on an item work as a good alternative to help
        in cases with specific needs, while keeping the  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        interface easier to use?  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Recipes, including items and amounts?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Is there anything else that'd be useful to help with or to track?  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    - Why don't we just have our groceries delivered?
