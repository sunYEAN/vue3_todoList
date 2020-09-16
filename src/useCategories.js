import {ref} from 'vue';
import {getLocalStorage, setLocalStorage} from './utils'

const cate_name = 'categories';
export function useCategories() {
    let id = ref(getLocalStorage('id') || 0);
    let categories = ref(getLocalStorage(cate_name) || []);

    const addOne = function ({name, color}) {
        const item = categories.value.find(item => item.name === name);
        if (item) {
            alert('该分类已存在')
        } else {
            categories.value.unshift({
                id: ++ id.value,
                color,
                name
            })
        }
        setLocalStorage(cate_name, categories.value);
    };

    const removeOne = function (id) {
        const index = categories.value.findIndex(item => item.id === id);
        if (~index) {
            categories.value.splice(index, 1);
        }
        localStorage.setItem(cate_name, categories.value);
    };

    return {
        categories,
        addOne,
        removeOne
    }
}
