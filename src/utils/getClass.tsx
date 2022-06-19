function getClass(i: number): string {
    if (i % 5 === 0) {
        return 'col-span-1 row-span-2'
    }
        else if (i % 6 === 0) {
            return 'col-span-1 row-span-2'
    } 
        else {
        return 'col-span-1'
    }
}

export default getClass