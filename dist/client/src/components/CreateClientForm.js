"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateClientForm = ({ clientName, setClientName, }) => {
    return (<form>
      <div className='mb-3'>
        <label htmlFor='clientName' className='form-label'>
          Client Name:
        </label>
        <input type='text' className='form-control' id='clientName' value={clientName} onChange={(e) => setClientName(e.target.value)}/>
      </div>
    </form>);
};
exports.default = CreateClientForm;
