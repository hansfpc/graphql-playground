import Sites from '../../../../collections/Sites'

export default parent => Sites.find({ authorId: parent.id })
