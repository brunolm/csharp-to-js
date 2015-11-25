# Linq and Enumerations

```
C#                      | JavaScript       
-------------------------------------------------
Aggregate               | reduce
All                     | every
Any                     | some
Concat                  | concat
ForEach                 | forEach
IndexOf                 | indexOf
LastIndexOf             | lastIndexOf
OrderBy                 | sort
Reverse                 | reverse
String.Join(str, arr)   | join
Select                  | map
Skip                    | slice
Take                    | slice
Where                   | filter
```

The table bellow shows how some methods can be replicated using one line codes.

```
C#                      | JavaScript       
-------------------------------------------------
Average                 | arr.reduce((a, b) => a + b) / arr.length
Count                   | arr.length
DefaultIfEmpty          | arr.length ? [def] : arr
ElementAt               | arr[index]
FirstOrDefault          | arr.length ? arr[0] : def
LastOrDefault           | arr.length ? arr[arr.length - 1] : def
Max                     | Math.max.apply(this, arr)
Min                     | Math.min.apply(this, arr)
Sum                     | arr.reduce((a, b) => a + b)
```

## Docs

 - [C# Enumerable methods documentation][1]
 - [JavaScript Array documentation][2]

 [1]: https://msdn.microsoft.com/en-us/library/system.linq.enumerable_methods(v=vs.100).aspx
 [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array