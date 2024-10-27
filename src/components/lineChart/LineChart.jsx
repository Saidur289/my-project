import { LineChart as LCart, Line, XAxis, YAxis, ZAxis } from 'recharts';

const LineChart = () => {
    const subjectMarks = [
        { "id": 1, "name": "Alice Johnson", "math": 85, "physics": 78, "chemistry": 82 },
        { "id": 2, "name": "Bob Smith", "math": 23, "physics": 88, "chemistry": 91 },
        { "id": 3, "name": "Carol Williams", "math": 76, "physics": 83, "chemistry": 79 },
        { "id": 4, "name": "David Brown", "math": 88, "physics": 90, "chemistry": 85 },
        { "id": 5, "name": "Emma Jones", "math": 95, "physics": 91, "chemistry": 89 },
        { "id": 6, "name": "Frank Miller", "math": 70, "physics": 72, "chemistry": 74 },
        { "id": 7, "name": "Grace Davis", "math": 80, "physics": 85, "chemistry": 83 },
        { "id": 8, "name": "Hannah Wilson", "math": 78, "physics": 76, "chemistry": 80 },
        { "id": 9, "name": "Ian Garcia", "math": 33, "physics": 79, "chemistry": 50 },
        { "id": 10, "name": "Jane Martinez", "math": 90, "physics": 87, "chemistry": 88 }
      ]
      
    return (
        <div>
            <LCart width={800} height={400} data={subjectMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <ZAxis stroke = 'white'></ZAxis>
                <Line dataKey={'math'} stroke = 'red'></Line>
                <Line dataKey={'physics'} stroke = 'yellow'></Line>
                <Line dataKey={'chemistry'} stroke = 'blue'></Line>
            </LCart>
        </div>
    );
};

export default LineChart;