import { Article } from '.'

let article

beforeEach(async () => {
  article = await Article.create({ comma separated: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = article.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(article.id)
    expect(view.comma separated).toBe(article.comma separated)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = article.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(article.id)
    expect(view.comma separated).toBe(article.comma separated)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
