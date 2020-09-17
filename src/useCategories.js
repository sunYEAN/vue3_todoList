import {ref, watch} from 'vue';
import {getLocalStorage, setLocalStorage} from './utils'

const cate_name = 'categories';

export function useCategories() {
    let _id = getLocalStorage('id') || 0;
    let arr = getLocalStorage(cate_name) || [];

    let id = ref(_id);
    let categories = ref(arr);

    watch(categories, (value) => {
        console.log(value, 'use');
    }, {
        immediate: true
    });

    const addOne = function ({name, color}) {
        const item = categories.value.find(item => item.name === name);
        if (item) return alert('该分类已存在');
        id.value ++ ;
        categories.value.unshift({
            id: id.value,
            color,
            name
        });
        setLocalStorage('id', id.value);
        setLocalStorage(cate_name, categories.value);
    };

    const removeOne = function (id) {
        const index = categories.value.findIndex(item => item.id === id);
        if (~index) categories.value.splice(index, 1);
        localStorage.setItem(cate_name, categories.value);
    };

    return {
        addOne,
        removeOne,
        categories,
    }
}
