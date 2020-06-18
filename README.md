# Chips multiselect component for vue js

![Demo](https://media.giphy.com/media/cmZUSPkI1J3fTn3PDg/giphy.gif)

## Install
```
npm install v-chips-multiselect
```

## Usage
#### Locally, add following to the host component
```
import ChipsMultiselect from 'v-chips-multiselect'
```
#### Globally, in main.js
```
import ChipsMultiselect from 'v-chips-multiselect'

Vue.use(ChipsMultiselect)
```

## Options

Use ```v-model``` for data

Pass list of data using props ```items```. The items must be an ```array```.

Use ```sorting-property``` props whose type is ```Strings```. This props will be use to display in list and **sorting** and **searching** will be based on this. For example, 

```
<template>
  <ChipsMultiselect v-model="selectedItems" :items='items' :sorting-property="'name'" />
</template>
```

```
<scripts>

  export default {
    data() {
      return {
        selectedItems: null,
        items: [
          {
            id: 1,
            name: 'Javascript'
          },
          {
            id: 2,
            name: 'PHP'
          },
          {
            id: 3,
            name: 'Node'
          },
          {
            id: 4,
            name: 'Python'
          },
          {
            id: 5,
            name: 'Rust'
          },
          {
            id: 6,
            name: 'Java'
          }
        ]
      }
    }
  }

</scripts>

```

You can pass ```items``` as 

```
items2: ['Node', 'Python', 'Rust', 'Java'],
```

In that case, do not pass any ```sorting-property``` props.

