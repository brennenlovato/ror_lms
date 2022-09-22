import { Container, ListGroup } from 'react-bootstrap';
import EnrollShow from './EnrollShow';

const EnrollList = ({ enrollments, updateEnroll, unenrolledUsers, deleteEnroll, courseId }) => (
  <Container>
    <ListGroup variant="flush">
      { enrollments.map( e => 
        <EnrollShow 
          key={e.id}
          {...e}
          courseId={courseId}
        />
      )}
    </ListGroup>
  </Container>
)

export default EnrollList;