# Notes

## Animation control

- duration: 3s;
- delay: 2s;
- iteration-count: infinite;

## Easy to use API

Example:

```javascript
var player = animate('#text').flash({
        duration: 3000,
        delay: 2000,
        iteratioCount: 2
    });
```

As selector it support `Document.querySelector()`.


## Support old browser

Using a polify.