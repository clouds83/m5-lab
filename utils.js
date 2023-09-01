import { useRef, useEffect } from 'react'

export function getSectionListData(data) {
  // 3. Transform the raw data retrieved by the getMenuItems() inside the database.js
  // into the data structure a SectionList component expects as its "sections" prop.
  // @see https://reactnative.dev/docs/sectionlist as a reference

  // SECTION_LIST_MOCK_DATA is an example of the data structure you need to return from this function.
  // The title of each section should be the category.
  // The data property should contain an array of menu items.
  // Each item has the following properties: "id", "title" and "price"

  const sections = []

  const menuItemsByCategory = {}

  for (const menuItem of data) {
    if (!menuItemsByCategory[menuItem.category]) {
      menuItemsByCategory[menuItem.category] = []
    }

    menuItemsByCategory[menuItem.category].push(menuItem)
  }

  for (const category in menuItemsByCategory) {
    const section = {
      title: category,
      data: menuItemsByCategory[category],
    }

    sections.push(section)
  }

  return sections
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
  }, dependencies)
}
