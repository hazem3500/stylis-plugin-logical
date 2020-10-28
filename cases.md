# Cases

## TransformLogicalProperty

<details>
  <summary>Expand cases</summary>
  
  ### Case 1
  from

```css
.selector {
    block-size: 50px;
}
```

to

```css
.selector {
    height: 50px;
}
```

</details>

## transformLogicalInlineProperty

<details>
  <summary>Expand cases</summary>
  
  ### Case 1

  from

  ```css
  .selector {
      margin-inline: 50px;
  }
  ```

  to

  ```css
  .selector {
      margin-left: 50px;
      margin-right: 50px;
  }
  ```

  ### Case 2

  from

  ```css
  .selector {
      margin-inline: 50px 100px;
  }
  ```

  to

  ```css
  [dir='ltr'] .selector {
      margin-left: 50px;
      margin-right: 100px;
  }

  [dir='rtl'] .selector {
      margin-left: 100px;
      margin-right: 50px;
  }
  ```

  ### Case 3

  from

  ```css
  .selector {
      margin-inline-start: 50px;
  }
  ```

  to

  ```css
  [dir='ltr'] .selector {
      margin-left: 50px;
  }

  [dir='rtl'] .selector {
      margin-right: 50px;
  }
  ```

  ### Case 4

  from

  ```css
  .selector {
      margin-inline-end: 50px;
  }
  ```

  to

  ```css
  [dir='ltr'] .selector {
      margin-right: 50px;
  }

  [dir='rtl'] .selector {
      margin-left: 50px;
  }
  ```

</details>

## transform4DimensionalDirectionalProperty
<details>
  <summary>Expand cases</summary>
  
  ### Case 1

  from

  ```css
  .selector {
      inset: 50px;
  }
  ```

  to

  ```css
  .selector {
      top: 50px;
      right: 50px;
      bottom: 50px;
      left: 50px;
  }
  ```

  ### Case 2

  from

  ```css
  .selector {
      inset: 50px 100px;
  }
  ```

  to

  ```css
  .selector {
      top: 50px;
      right: 100px;
      bottom: 50px;
      left: 100px;
  }
  ```

  ### Case 3

  from

  ```css
  .selector {
      inset: 50px 100px 150px;
  }
  ```

  to

  ```css
  .selector {
      top: 50px;
      right: 100px;
      bottom: 150px;
      left: 100px;
  }
  ```

  ### Case 4

  from

  ```css
  .selector {
      inset: 50px 100px 150px 200px;
  }
  ```

  to

  ```css
  .selector {
      top: 50px;
      right: 100px;
      bottom: 150px;
      left: 200px;
  }
  ```
</details>

## transform4DimensionalDirectionalLogicalProperty
<details>
  <summary>Expand cases</summary>

  ### Case 1

  from

  ```css
  .selector {
      inset: logical 50px;
  }
  ```

  to

  ```css
  .selector {
      top: 50px;
      right: 50px;
      bottom: 50px;
      left: 50px;
  }
  ```

  ### Case 2

  from

  ```css
  .selector {
      inset: logical 50px 100px;
  }
  ```

  to

  ```css
  .selector {
      top: 50px;
      right: 100px;
      bottom: 50px;
      left: 100px;
  }
  ```

  ### Case 3

  from

  ```css
  .selector {
      inset: logical 50px 100px 150px;
  }
  ```

  to

  ```css
  .selector {
      top: 50px;
      right: 100px;
      bottom: 150px;
      left: 100px;
  }
  ```

  ### Case 4

  from

  ```css
  .selector {
      inset: logical 50px 100px 150px 200px;
  }
  ```

  to

  ```css
  .selector {
      top: 50px;
      bottom: 150px;
  }

  [dir='ltr'] .selector {
      right: 200px;
      left: 100px;
  }

  [dir='rtl'] .selector {
      right: 100px;
      left: 200px;
  }
  ```
</details>

## transform4DimensionalLogicalProperty
<details>
  <summary>Expand cases</summary>

  ### Case 1

  from

  ```css
  .selector {
      margin: logical 50px;
  }
  ```

  to

  ```css
  .selector {
      margin: 50px;
  }
  ```

  ### Case 2

  from

  ```css
  .selector {
      margin: logical 50px 100px;
  }
  ```

  to

  ```css
  .selector {
      margin: 50px 100px;
  }
  ```

  ### Case 3

  from

  ```css
  .selector {
      margin: logical 50px 100px 150px;
  }
  ```

  to

  ```css
  .selector {
      margin: 50px 100px 150px;
  }
  ```

  ### Case 4

  from

  ```css
  .selector {
      margin: logical 50px 100px 150px 200px;
  }
  ```

  to

  ```css
  [dir='ltr'] .selector {
      margin: 50px 200px 150px 100px;
  }

  [dir='rtl'] .selector {
      margin: 50px 100px 150px 200px;
  }
  ```
</details>

## transformPropertyWithLogicalDirectionalValues
<details>
  <summary>Expand cases</summary>

  ### Case 1

  from

  ```css
  .selector {
      clear: inline-start;
  }
  ```

  to

  ```css
  [dir='ltr'] .selector {
      clear: left;
  }

  [dir='rtl'] .selector {
      clear: right;
  }
  ```

  ### Case 2

  from

  ```css
  .selector {
      clear: inline-end;
  }
  ```

  to

  ```css
  [dir='ltr'] .selector {
      clear: right;
  }

  [dir='rtl'] .selector {
      clear: left;
  }
  ```
</details>

## transformPropertyWithLogicalValues
<details>
  <summary>Expand cases</summary>

  ### Case 1

  from

  ```css
  .selector {
      resize: block;
  }
  ```

  to

  ```css
  .selector {
      resize: vertical;
  }
  ```

  ### Case 2

  from

  ```css
  .selector {
      resize: inline;
  }
  ```

  to

  ```css
  .selector {
      resize: horizontal;
  }
  ```
</details>